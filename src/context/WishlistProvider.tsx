// src/context/WishlistProvider.tsx

'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Defina aqui a interface Product conforme seu JSON de produtos
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
}

interface WishlistContextValue {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined);

export default function WishlistProvider({ children }: { children: ReactNode }): JSX.Element {
  const [items, setItems] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    setItems(prev => {
      if (prev.find(p => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const clearWishlist = () => setItems([]);

  return (
    <WishlistContext.Provider value={{ items, addToWishlist, removeFromWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist(): WishlistContextValue {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist deve ser usado dentro de um <WishlistProvider>');
  }
  return context;
}
