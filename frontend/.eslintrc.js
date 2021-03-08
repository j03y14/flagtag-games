module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  plugins: ['react'],
  rules: {
    'no-console': 0,
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': [1, { allow: 'single-child' }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@apis', './src/apis'],
          ['@components', './src/components'],
          ['@reusable', './src/components/reusable'],
          ['@pages', './src/pages'],
          ['@config', './src/config'],
          ['@assets', './assets'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
