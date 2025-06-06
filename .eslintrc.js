// .eslintrc.js

module.exports = {
  root: true, // Garante que este é o arquivo raiz de configuração
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "jsx-a11y",
    "import",
  ],
  extends: [
    "eslint:recommended",                    // Regras básicas do ESLint
    "plugin:@typescript-eslint/recommended", // Regras recomendadas para TS
    "plugin:react/recommended",              // Regras recomendadas para React
    "plugin:react-hooks/recommended",        // Regras de Hook do React
    "plugin:jsx-a11y/recommended",           // Acessibilidade
    "plugin:import/errors",                  // Organização de imports
    "plugin:import/warnings",
    "plugin:import/typescript",
    "next/core-web-vitals",                  // Configuração padrão do Next.js
  ],
  settings: {
    react: {
      version: "detect", // Detecta automaticamente a versão instalada do React
    },
    "import/resolver": {
      typescript: {}, // Para que o eslint-plugin-import reconheça paths do TS (ex.: "@/context/…")
    },
  },
  rules: {
    // Aqui você pode customizar ou desabilitar regras específicas, por exemplo:
    // "react/prop-types": "off",
    // "@typescript-eslint/explicit-module-boundary-types": "warn",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true, // ← Adicionado para que ESLint reconheça globals do Jest em testes
  },
};
