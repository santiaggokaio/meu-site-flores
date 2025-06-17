/** @type {import('ts-jest').JestConfigWithTsJest} */

const nextJest = require('next/jest');
const createJestConfig = nextJest({
  // Direciona para o diretório raiz do projeto
  dir: './',
});

// === customJestConfig abre aqui ===
const customJestConfig = {
  // Preset do ts-jest
  preset: 'ts-jest',

  // Ambiente de teste para simular o DOM
  testEnvironment: 'jsdom',

  // Quais extensões de arquivo o Jest deve considerar
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  // Configuração do ts-jest
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.jest.json',
      },
    ],
  },

  // Mapeamento de módulos (alias do Next, CSS modules, mocks de arquivos estáticos)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpe?g)$': '<rootDir>/__mocks__/fileMock.js',
  },

  // Ignorar node_modules e .next
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],

  // Scripts para rodar depois de carregar o ambiente
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // Se quiser incluir ESM de pacotes específicos
  transformIgnorePatterns: [
    '/node_modules/(?!(some-esm-module|outro-pacote-esm)/)',
  ],
};
// === customJestConfig fecha aqui ===

// Exporta a configuração final usando o helper do Next
module.exports = createJestConfig(customJestConfig);
