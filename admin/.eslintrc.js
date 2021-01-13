module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    window: true,
    document: true,
    fetch: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-unused-vars': 'off',
    'arrow-parens': ['error', 'always'],
    'object-curly-newline': 'off',
    'react/jsx-props-no-spreading': 'off',
    'comma-dangle': 'off',
    'operator-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react/forbid-prop-types': 'off',
    'import/no-unresolved': 'off',
    'no-useless-constructor': 'off',
    'click-events-have-key-events': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-access-state-in-setstate': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'class-methods-use-this': 'off',
    'react/require-default-props': 'off',
    'no-console': ['error'],
  },
};