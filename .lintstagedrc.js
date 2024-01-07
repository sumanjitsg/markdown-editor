export default {
    '**/*.{js,jsx,ts,tsx}': [
        'prettier --check',
        'eslint --max-warnings 0',
        () => 'tsc-files --noEmit',
    ],
    '!**/*.{js,jsx,ts,tsx}': ['prettier --check'],
};
