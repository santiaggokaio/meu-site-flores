// src/context/CartContext.tsx

import React, { createContext, useContext, ReactNode, useState } from 'react';

/**
 * Cada item do carrinho deve ter, no mínimo:
 * - id, name, price, quantity, image
 */
export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  loadCartFromStorage: () => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === item.id);
      if (existingIndex !== -1) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, qty: number) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
    );
  };

  const loadCartFromStorage = () => {
    const saved = window.localStorage.getItem('cartItems');
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch {
        // falha silenciosa
      }
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        loadCartFromStorage,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um <CartProvider>');
  }
  return context;
}
