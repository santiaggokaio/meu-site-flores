import React from 'react';
import { render, screen } from '@testing-library/react';
import { CartProvider } from '@/context/CartContext';
// Ajuste de import para o App Router (Next.js 13+)
import CarrinhoPage from '../../app/carrinho/page';

describe('checkoutFlow', () => {
  it('deve mostrar item no carrinho', () => {
    render(
      <CartProvider>
        <CarrinhoPage />
      </CartProvider>
    );

    // Supondo que seu CarrinhoClient mostre o texto "Seu carrinho está vazio"
    expect(screen.getByText(/seu carrinho está vazio/i)).toBeInTheDocument();

    // Você pode adicionar mais asserts aqui, 
    // por exemplo ao adicionar itens via contexto e checar se aparecem na tela.
  });
});
