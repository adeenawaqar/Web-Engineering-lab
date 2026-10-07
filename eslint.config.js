const js = require("@eslint/js");

module.exports = [
  {
    files: ["*.js", "**/*.js"],
    ...js.configs.recommended,
  },
  {
    files: ["eslint.config.js", "tests/**/*.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
      },
    },
  },
  {
    files: ["public/**/*.js"],
    languageOptions: {
      globals: {
        document: "readonly",
      },
    },
  },
];
