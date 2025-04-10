import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warn for unused variables, ignore those starting with "_"
      '@typescript-eslint/no-empty-interface': 'off', // Allow empty interfaces
      '@typescript-eslint/no-empty-object-type': 'off',
      'react/no-unescaped-entities': 0, // Allow unescaped entities in JSX
    },
  },
];

export default eslintConfig;
