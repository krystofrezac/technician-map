module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'prefer-arrow-functions',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',

    // import sorting
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react$'],
          ['^@?\\w'],
          ['^app'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.s?css'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    // general
    'no-unused-vars': 'off',
    'import/no-anonymous-default-export': 'error',
    'prefer-arrow-functions/prefer-arrow-functions': 'error',
    'no-console': 'error',

    // typescript
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'error',

    // React
    'react/destructuring-assignment': 'error',
    'react/self-closing-comp': ['error'],
  },
};
