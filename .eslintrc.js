module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react-native/all',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'react',
        'react-native',
        'import',
        'prettier',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    env: {
        'react-native/react-native': true,
        es6: true,
        node: true,
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react-native/no-inline-styles': 'warn',
        'react-native/no-color-literals': 'warn',
        'react-native/no-raw-text': ['warn', { skip: ['Text'] }],
        'react-native/split-platform-components': 'warn',
        'react-native/no-unused-styles': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
                alphabetize: { order: 'asc', caseInsensitive: true },
            },
        ],
        'import/no-duplicates': 'error',
        'import/no-unresolved': 'error',
        'prettier/prettier': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {},
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
}; 