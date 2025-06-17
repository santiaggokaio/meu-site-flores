import React, { forwardRef, createElement } from 'react';

// Se precisar desse campo por compatibilidade de ESM/CJS:
export const __esModule = true;

// Mock específico:
export const MessageCircle = (props) => {
  return createElement(
    'svg',
    { 'data-testid': 'MessageCircle', ...props },
    null
  );
};

// Factory genérico (caso use para vários ícones):
export const createMockIcon = (name: string) => {
  const Component = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
    (props, ref) => {
      const { 'data-testid': dataTestId = name, ...rest } = props;
      return (
        <svg
          data-testid={dataTestId}
          ref={ref}
          role="img"
          aria-hidden="true"
          {...rest}
        />
      );
    }
  );
  Component.displayName = name;
  return Component;
};

// Exemplo de uso do factory:
export const AnotherIcon = createMockIcon('AnotherIcon');
