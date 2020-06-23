module.exports = {
  extends: [
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 0,
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'import/no-unresolved': 'error',
    semi: 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
