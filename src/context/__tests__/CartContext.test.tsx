/* eslint-env jest */
import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { CartProvider, useCart } from '@/context/CartContext';

describe('CartContext', () => {
  // Wrapper para envolver o hook com CartProvider
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <CartProvider>{children}</CartProvider>
  );

  it('should add an item to the cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart({
        id: '1',
        name: 'Rosa Vermelha',
        price: 29.9,
        quantity: 1,
        image: '/flowers/rosa-vermelha.jpg',
      });
    });

    expect(result.current.cart.length).toBe(1);
    expect(result.current.cart[0].name).toBe('Rosa Vermelha');
    expect(result.current.cart[0].quantity).toBe(1);
  });

  it('should remove an item from the cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    // Primeiro adiciona
    act(() => {
      result.current.addToCart({
        id: '1',
        name: 'Rosa Vermelha',
        price: 29.9,
        quantity: 1,
        image: '/flowers/rosa-vermelha.jpg',
      });
    });
    expect(result.current.cart).toHaveLength(1);

    // Depois remove
    act(() => {
      result.current.removeFromCart('1');
    });
    expect(result.current.cart).toHaveLength(0);
  });

  it('should increment quantity when adding the same product again', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart({
        id: '1',
        name: 'Orquídea',
        price: 49.9,
        quantity: 1,
        image: '/flowers/orquidea.jpg',
      });
    });
    act(() => {
      result.current.addToCart({
        id: '1',
        name: 'Orquídea',
        price: 49.9,
        quantity: 2,
        image: '/flowers/orquidea.jpg',
      });
    });

    // Se a implementação soma quantidades, agora deverá ser quantity = 3
    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0].quantity).toBe(3);
  });
});
