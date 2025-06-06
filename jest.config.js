/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  // Agora passamos as opções do ts-jest diretamente aqui:
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.jest.json'
      }
    ]
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpe?g)$': '<rootDir>/__mocks__/fileMock.js'
  },

  testPathIgnorePatterns: ['/node_modules/', '/.next/'],

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  transformIgnorePatterns: [
    '/node_modules/(?!(some-esm-module|outro-pacote-esm)/)'
  ]

  // note que a seção "globals" foi removida, pois agora as opções do ts-jest
  // estão dentro de transform
};
