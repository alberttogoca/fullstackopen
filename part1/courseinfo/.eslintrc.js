module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourcetype: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended', // Accessibility rules
    'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'react-hooks', 'import', 'simple-import-sort', 'prettier'],
  rules: {
    // PRETTIER
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules

    // REACT
    'react/react-in-jsx-scope': 'off', // No need to import React in React 18
    'react/prop-types': 'off', // We will use TypeScript's types for component props instead
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // TYPESCRIPT
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true, allowConciseArrowFunctionExpressionsStartingWithVoid: true },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
    ],

    // SORT IMPORTS
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    // ACCESIBILITY
    // This rule is not compatible with Next.js's <Link /> components
    // 'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      { components: ['Link'], specialLink: ['hrefLeft', 'hrefRight'], aspects: ['invalidHref', 'preferButton'] },
    ],
    'jsx-a11y/accessible-emoji': 'off',
  },
  overrides: [],
};
