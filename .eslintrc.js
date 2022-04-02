module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier"
    ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersions: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {},
};
