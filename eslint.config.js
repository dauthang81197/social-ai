import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactNativePlugin from 'eslint-plugin-react-native';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
    js.configs.recommended,
    {
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
            '**/build/**',
            '**/coverage/**',
            '**/*.config.js',
            '**/babel.config.js',
            '**/metro.config.js',
            '**/jest.config.js',
        ],
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            '@typescript-eslint': tseslint,
            'react': reactPlugin,
            'react-hooks': reactHooksPlugin,
            'react-native': reactNativePlugin,
            'import': importPlugin,
            'prettier': prettierPlugin,
        },
        languageOptions: {
            parser: tseslintParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                project: './tsconfig.json',
                ecmaVersion: 2021,
                sourceType: 'module',
            },
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
    },
]; 