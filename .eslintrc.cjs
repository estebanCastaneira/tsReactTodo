module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    quotes: "off",
    "@typescript-eslint/quotes": "off",
    semi: "off",
    "@typescript-eslint/semi": "off",
    "no-extra-semicolons": "off",
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off",
  },
};
