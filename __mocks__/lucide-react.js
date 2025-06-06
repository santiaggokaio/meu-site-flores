// __mocks__/lucide-react.js

import { createElement } from 'react';

// Marca como ES Module
export const __esModule = true;

// Exporte aqui todos os ícones que seus componentes importam de 'lucide-react'.
export const MessageCircle = (props) => {
  return createElement(
    'svg',
    { 'data-testid': 'mock-icon', ...props },
    null
  );
};

// Se você importar mais ícones (HomeIcon, ShoppingCart, etc.), basta listá-los aqui:
// export const HomeIcon = (props) => createElement('svg', { 'data-testid': 'home-icon', ...props });
// export const ShoppingCart = (props) => createElement('svg', { 'data-testid': 'shopping-icon', ...props });
// …e assim por diante.
