import * as gcp from '@pulumi/gcp';
import * as pulumi from '@pulumi/pulumi';

const CONNECTION_ID = 'github-connection';
const REPOSITORY_ID = 'sumanjitsg-markdown-editor';
const PROXY_IMAGE = 'gcs-proxy';

// Enable required GCP APIs
const apis = [
    'cloudbuild.googleapis.com',
    'storage-api.googleapis.com',
    'run.googleapis.com',
    'artifactregistry.googleapis.com',
].map(
    api =>
        new gcp.projects.Service(api.replace(/\./g, '-'), {
            project: gcp.config.project,
            service: api,
            disableOnDestroy: false,
        })
);

// Artifact Registry for proxy container images
const registry = new gcp.artifactregistry.Repository(
    'proxy-registry',
    {
        repositoryId: 'cloud-run',
        location: 'us-central1',
        format: 'DOCKER',
        cleanupPolicies: [
            {
                id: 'keep-latest-only',
                action: 'KEEP',
                mostRecentVersions: { keepCount: 1 },
            },
        ],
    },
    { dependsOn: apis }
);

// Private GCS bucket
const bucket = new gcp.storage.Bucket(
    'site-bucket',
    {
        name: pulumi.interpolate`${gcp.config.project}-bucket`,
        location: 'US-CENTRAL1',
        uniformBucketLevelAccess: true,
        versioning: { enabled: false },
    },
    { dependsOn: apis }
);

// Cloud Run service account — reads from bucket
const proxySa = new gcp.serviceaccount.Account(
    'proxy-sa',
    {
        accountId: 'cloud-run-proxy',
        displayName: 'Cloud Run Proxy Service Account',
    },
    { dependsOn: apis }
);

new gcp.storage.BucketIAMMember(
    'proxy-bucket-access',
    {
        bucket: bucket.name,
        role: 'roles/storage.objectViewer',
        member: pulumi.interpolate`serviceAccount:${proxySa.email}`,
    },
    { dependsOn: [bucket, proxySa] }
);

// Cloud Run service
const imageUrl = pulumi.interpolate`us-central1-docker.pkg.dev/${gcp.config.project}/${registry.repositoryId}/${PROXY_IMAGE}`;

const proxyService = new gcp.cloudrunv2.Service(
    'proxy-service',
    {
        name: 'gcs-proxy',
        location: 'us-central1',
        template: {
            serviceAccount: proxySa.email,
            containers: [
                {
                    image: 'gcr.io/cloudrun/hello',
                    envs: [{ name: 'BUCKET', value: bucket.name }],
                    resources: {
                        cpuIdle: true,
                        limits: { memory: '128Mi', cpu: '1' },
                    },
                },
            ],
            scaling: { minInstanceCount: 0, maxInstanceCount: 1 },
        },
    },
    { dependsOn: [bucket, proxySa, registry] }
);

// Allow unauthenticated access to Cloud Run
new gcp.cloudrunv2.ServiceIamMember(
    'proxy-public-access',
    {
        name: proxyService.name,
        location: 'us-central1',
        role: 'roles/run.invoker',
        member: 'allUsers',
    },
    { dependsOn: proxyService }
);

// Cloud Build service account with minimal permissions
const buildSa = new gcp.serviceaccount.Account(
    'build-sa',
    {
        accountId: 'cloud-build',
        displayName: 'Cloud Build Service Account',
    },
    { dependsOn: apis }
);

const buildSaRoles = [
    'roles/storage.admin',
    'roles/logging.logWriter',
    'roles/artifactregistry.writer',
    'roles/run.developer',
    'roles/iam.serviceAccountUser',
];

for (const role of buildSaRoles) {
    new gcp.projects.IAMMember(
        `build-sa-${role.split('/')[1]}`,
        {
            project: gcp.config.project ?? '',
            role,
            member: pulumi.interpolate`serviceAccount:${buildSa.email}`,
        },
        { dependsOn: buildSa }
    );
}

// Cloud Build trigger — deploy on push to main
const repoUri = pulumi.interpolate`projects/${gcp.config.project}/locations/us-central1/connections/${CONNECTION_ID}/repositories/${REPOSITORY_ID}`;

new gcp.cloudbuild.Trigger(
    'deploy-trigger',
    {
        name: 'deploy-to-gcs',
        project: gcp.config.project,
        location: 'us-central1',
        serviceAccount: pulumi.interpolate`projects/${gcp.config.project}/serviceAccounts/${buildSa.email}`,
        repositoryEventConfig: {
            repository: repoUri,
            push: { branch: '^develop$' },
        },
        filename: 'cloudbuild.yaml',
        substitutions: {
            _BUCKET: bucket.name,
            _IMAGE: imageUrl,
            _SERVICE: proxyService.name,
        },
    },
    { dependsOn: [bucket, registry, proxyService] }
);

// Outputs
export const bucketName = bucket.name;
export const proxyUrl = proxyService.uri;
