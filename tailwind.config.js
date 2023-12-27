const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
                'roboto-slab': [
                    'Roboto Slab',
                    ...defaultTheme.fontFamily.serif,
                ],
                'roboto-mono': ['Roboto Mono', ...defaultTheme.fontFamily.mono],
                commissioner: ['Commissioner', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
