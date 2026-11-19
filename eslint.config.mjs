import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      'app/**',
      'dist/**',
      'docs/**',
      'coverage/**',
      'test-results/**',
      'playwright-report/**',
      'src/renderer/.next/**',
      'src/renderer/next-env.d.ts',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      // Stub signatures intentionally declare parameters that are not used yet.
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    },
  },
  {
    files: ['src/renderer/**/*.{ts,tsx}'],
    plugins: { 'react-hooks': reactHooks },
    languageOptions: {
      globals: { ...globals.browser },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
)
