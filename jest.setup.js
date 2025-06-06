/* eslint-env jest */

import '@testing-library/jest-dom';
import { act as reactAct, createElement } from 'react';

/* eslint-disable @typescript-eslint/no-var-requires */
const TestUtils = require('react-dom/test-utils');
/* eslint-enable @typescript-eslint/no-var-requires */

// Monkey-patch: força todo call a ReactDOMTestUtils.act a usar React.act
TestUtils.act = reactAct;

// Mocks do Next/Image e lucide-react permanecem abaixo:
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => createElement('img', { ...props, alt: '' }),
}));

jest.mock('lucide-react', () => ({
  __esModule: true,
  MessageCircle: (props) =>
    createElement('svg', { 'data-testid': 'mock-icon', ...props }),
  // adicione outros ícones aqui, se necessário…
}));
