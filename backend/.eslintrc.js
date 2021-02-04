module.exports = {
  env: {
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 12,
  },
  ignorePatterns: ['node_modules/'],
  rules: {},
  settings: {
    'import/resolver': {
      alias: [
        ['@', './src'],
        ['@routes', './src/routes'],
        ['@models', './src/models'],
        ['@repositories', './src/repositories'],
        ['@services', './src/services'],
        ['@utils', './src/utils'],
        ['@constants', './src/constants'],
        ['@apis', './src/apis'],
      ],
      extensions: ['.js'],
    },
  },
};
