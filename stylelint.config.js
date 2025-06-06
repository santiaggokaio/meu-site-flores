module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'declaration-block-trailing-semicolon': 'always',
    'no-descending-specificity': null,
  },
  ignoreFiles: ['node_modules/**', 'public/**'],
};
