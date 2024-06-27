// @ts-check

import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxAccessibilityPlugin from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';
import tailwindPlugin from 'eslint-plugin-tailwindcss';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    ...tseslint.configs.recommendedTypeChecked,

    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            nextPlugin,
            reactPlugin,
            reactHooksPlugin,
            jsxAccessibilityPlugin,
            tailwindPlugin,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/restrict-template-expressions': [
                'error',
                {
                    allowNumber: true,
                    allowBoolean: true,
                    allowAny: false,
                    allowNullish: true,
                },
            ],
        },
        languageOptions: {
            parserOptions: {
                project: true,
            },
        },
    },
    {
        files: ['**/*.js'],
        ...tseslint.configs.disableTypeChecked,
    },
    {
        ignores: [
            '.eslintrc.js',
            '.prettierrc.js',
            'node_modules/**',
            'dist/**',
            'build/**',
            '.next/**',
            '**/*.config.js',
        ],
    }
);
