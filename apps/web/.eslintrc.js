module.exports = {
  extends: ["next/core-web-vitals", "../../.eslintrc.js"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react/display-name": "off",
  },
};
