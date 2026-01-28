// eslint.config.js
import tsParser from '@typescript-eslint/parser';
import next from 'eslint-config-next';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    // Apply to all files
    extends: [
      ...next, // Next.js rules
      ...nextCoreWebVitals, // Core web vitals rules
    ],
    languageOptions: {
      parser: tsParser,
      globals: {
        React: 'readonly',
      },
    },
    rules: {},
  },
]);
