module.exports = {
  extends: [
    '@entire.se/eslint-react',
    'plugin:@entire.se/eslint-react/recommended',
    'plugin:@next/next/recommended',
  ],
  rules: {
    '@calm/react-intl/missing-formatted-message': 'off',
    '@calm/react-intl/missing-attribute': 'off',
    '@calm/react-intl/missing-values': 'off',
  },
};
