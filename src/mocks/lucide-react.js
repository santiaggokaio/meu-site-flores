// src/mocks/icons/ShoppingCart.tsx
// Refatorado para usar JSX, tipagem e melhores práticas de acessibilidade

import React from 'react';

export interface ShoppingCartProps extends React.SVGProps<SVGSVGElement> {
  /** Caso queira fornecer título acessível */
  title?: string;
  /** ID para <title> se fornecido */
  titleId?: string;
}

export async function ShoppingCart({
  title,
  titleId,
  ...props
}: ShoppingCartProps) {
  // Definimos atributos de acessibilidade:
  // - Se houver title, incluímos <title> e aria-labelledby apontando para titleId.
  // - Se não houver title, marcamos aria-hidden para true.
  const ariaLabelledBy = title ? titleId || 'shopping-cart-title' : undefined;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      role={title ? 'img' : undefined}
      aria-labelledby={ariaLabelledBy}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title ? <title id={ariaLabelledBy}>{title}</title> : null}
      {/* Exemplo de paths do ícone de carrinho de compra.
          Ajuste conforme o SVG original que você deseja renderizar. */}
      <path d="M7 4h-2l-1 2H2v2h1l3.6 7.59-1.35 2.44A1 1 0 0 0 5 19h14v-2H6.42a.25.25 0 0 1-.23-.15l.03-.08L7.1 13h7.45a1 1 0 0 0 .95-.68l1.5-4A1 1 0 0 0 16.05 7H6.21l-.94-2zm0 0" />
      <circle cx="9" cy="21" r="2" />
      <circle cx="17" cy="21" r="2" />
    </svg>
  );
}

// Se houver outros ícones, exporte-os no mesmo padrão, por exemplo:
// src/mocks/icons/Heart.tsx
// import React from 'react';
// export interface HeartProps extends React.SVGProps<SVGSVGElement> { title?: string; titleId?: string; }
// export async function Heart({ title, titleId, ...props }: HeartProps) { /* ... */ }
