export default {
    globDirectory: 'dist/',
    globPatterns: ['**/*.{js,css,html,png,svg,woff2}'],
    swDest: 'dist/sw.js',
    runtimeCaching: [
        {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/css/,
            handler: 'StaleWhileRevalidate',
            options: {
                cacheName: 'google-fonts-stylesheets',
            },
        },
        {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\//,
            handler: 'CacheFirst',
            options: {
                cacheName: 'google-fonts-webfonts',
                expiration: {
                    maxEntries: 10,
                    maxAgeSeconds: 60 * 60 * 24 * 365,
                },
            },
        },
    ],
    skipWaiting: true,
    clientsClaim: true,
};
