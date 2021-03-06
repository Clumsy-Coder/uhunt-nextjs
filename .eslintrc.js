module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'airbnb-typescript',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    // 'plugin:redux-saga/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint',
    'eslint-plugin-tsdoc',
    'react',
    // 'redux-saga',
    'prettier',
    'jest',
    'jsx-a11y',
  ],
  rules: {
    'react/jsx-one-expression-per-line': ['off'],
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'react/jsx-props-no-spreading': ['off'],
    'tsdoc/syntax': 'warn',
  },
  settings: {
    'import/resolver': {
      // 'babel-module': {},
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  ignorePatterns: ['test-results', 'metro.config.js', 'coverage', '.eslintrc.js'],
};
