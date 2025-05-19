import css from '@eslint/css'
import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import * as importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // Игнорируемые файлы
  { ignores: ['dist', '**/*.d.ts'] },

  // Конфигурация для TypeScript файлов
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.eslint.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        jsxImportSource: 'react',
      },
    },
    plugins: {
      css,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.eslint.json',
        },
      },
    },
    rules: {
      // JS + TS
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended[0].rules,
      ...tseslint.configs.recommended[1].rules,

      // React
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // React Refresh
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // A11y (вручную)
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/alt-text': 'warn',

      // CSS
      'css/no-duplicate-imports': 'error',

      // Import
      'import/no-duplicates': 'error',
      'import/newline-after-import': 'warn',
      'import/order': [
        'warn',
        {
          groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: '**/*.css',
              group: 'index',
              position: 'before',
            },
            {
              pattern: 'react-toastify/dist/ReactToastify.css',
              group: 'index',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
          warnOnUnassignedImports: true,
        },
      ],
    },
  },

  // Конфигурация для JS файлов
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        jsxImportSource: 'react',
      },
    },
    plugins: {
      css,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      // JS базовые
      ...js.configs.recommended.rules,

      // React
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // React Refresh
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // A11y
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/alt-text': 'warn',

      // CSS
      'css/no-duplicate-imports': 'error',

      // Import
      'import/no-duplicates': 'error',
      'import/newline-after-import': 'warn',
      'import/order': [
        'warn',
        {
          groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: '**/*.css',
              group: 'index',
              position: 'before',
            },
            {
              pattern: 'react-toastify/dist/ReactToastify.css',
              group: 'index',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
          warnOnUnassignedImports: true,
        },
      ],
    },
  },

  // Отключаем конфликты с Prettier
  prettier,
)
