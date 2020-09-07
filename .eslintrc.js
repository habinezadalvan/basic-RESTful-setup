module.exports = {
  extends: "airbnb",
  plugins: ["import"],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    "function-paren-newline": "off",
    "no-param-reassign": 0,
    "no-underscore-dangle": "off",
    "import/extensions": ["off", "never"],
    "import/prefer-default-export": 0,
    'import/no-extraneous-dependencies': 0,
    "no-nested-ternary": 0,
    "import/no-mutable-exports": 0,
    "no-unused-expressions": ["error", { allowShortCircuit: true }],
    "class-methods-use-this": [
      "error",
      {
        exceptMethods: [
          "getSnapshotBeforeUpdate",
          "render",
          "componentWillUnmount",
          "componentDidMount",
        ],
      },
    ],
  },
};
