import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

function svgMockPlugin() {
    return {
        name: 'svg-mock',
        transform(_code: string, id: string) {
            if (id.endsWith('.svg?react')) {
                return 'export default () => null;';
            }
        },
    };
}

export default defineConfig({
    plugins: [svgMockPlugin()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './__tests__/setup.ts',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html', 'lcov'],
            reportsDirectory: './__tests__/coverage',
        },
    },
});
