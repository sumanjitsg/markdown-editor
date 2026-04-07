import { generateSW } from 'workbox-build';
import config from '../workbox.config.mjs';

try {
    const { count, size, warnings } = await generateSW(config);
    console.log(
        `Generated service worker with ${count} precached entries, totaling ${size} bytes.`
    );
    if (warnings.length > 0) {
        console.warn('Warnings:', warnings);
    }
} catch (error) {
    console.error('Failed to generate service worker:', error);
    process.exit(1);
}
