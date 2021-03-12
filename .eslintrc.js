module.exports = {
  extends: ['react-app', 'react-app/jest'],
  rules: {
    'implicit-arrow-linebreak': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-shadow': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'no-tabs': 0,
    'jsx-quotes': 0,
    'react/no-array-index-key': 0,
    'react/require-default-props': 0,
    'import/no-named-as-default': 0,
    'max-len': [2, { code: 200, tabWidth: 6, ignoreUrls: true }],
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'comma-dangle': ['error', 'never']
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'additional-typescript-only-rule': 'warn'
      }
    }
  ]
};
