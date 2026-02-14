import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

// eslint-disable-next-line @typescript-eslint/no-deprecated -- tseslint.config() still works; will migrate to defineConfig() when ecosystem stabilizes
export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    reactHooksPlugin.configs.flat['recommended-latest'],
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access -- jsx-a11y lacks flat config types
    jsxA11yPlugin.flatConfigs.recommended,
    nextPlugin.configs.recommended,

    {
        settings: {
            react: {
                version: 'detect',
            },
        },
    },

    {
        files: ['**/*.{ts,tsx}'],
        rules: {
            'react/prop-types': 'off',
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

    prettierConfig,

    {
        ignores: [
            'node_modules/**',
            'dist/**',
            'build/**',
            '.next/**',
            'eslint.config.ts',
        ],
    }
);
