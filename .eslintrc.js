module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'import/resolver': [
      0,
      {
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          }
        ]
      }
    ]
  },
  settings: {
    'import/resolver': { 'babel-module': {} },
    react: {
      version: 'detect'
    }
  },
  plugins: ['import']
};
