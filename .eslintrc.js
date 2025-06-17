// .eslintrc.js
// 1) Aplique o patch do RushStack: basta “require” sem invocar
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    'tailwindcss',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:tailwindcss/recommended',  // 👉 vírgula adicionada aqui
    'next',
    'next/core-web-vitals',
  ],
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: { project: './tsconfig.json' },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        moduleDirectory: ['node_modules', 'src/'],
        alwaysTryTypes: true,
      },
      alias: {
        map: [
          ['@/components', './src/components'],
          ['@/utils', './src/utils'],
          ['@/app', './src/app'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',

    // Removi duplicata de explicit-module-boundary-types
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    'jsx-a11y/alt-text': ['error'],
    'jsx-a11y/anchor-is-valid': ['error'],

    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'off',
  },
  overrides: [
    {
      files: [
        '.eslintrc.js',
        'jest.config.js',
        'jest.setup.js',
        'stylelint.config.js',
        'tailwind.config.js',
        'coverage/**',
        '__mocks__/**',
        'src/mocks/**',
      ],
      parserOptions: { project: null },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
