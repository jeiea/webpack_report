module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  extends: ["eslint:recommended"],
  rules: {
    'no-undef': 1,
    'no-unused-vars': 1
  }
};
