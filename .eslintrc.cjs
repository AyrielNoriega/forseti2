const RULES = {
    OFF: 'off',
    WARN: 'warn',
    ERROR: 'error'
};

module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react-refresh'],
    rules: {
        indent: [
            'error',
            4
        ],
        semi: [
            'error',
            'always'
        ],
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        "@typescript-eslint/no-explicit-any": RULES.WARN
    }
};
