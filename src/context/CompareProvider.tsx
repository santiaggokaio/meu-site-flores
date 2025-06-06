// src/context/CompareProvider.tsx

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

interface CompareContextValue {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  clear: () => void;
}

const CompareContext = createContext<CompareContextValue | undefined>(undefined);

export default function CompareProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);

  const addItem = (item: Product) => {
    setItems((prev) => {
      if (prev.find((p) => p.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const clear = () => setItems([]);

  return (
    <CompareContext.Provider value={{ items, addItem, removeItem, clear }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare deve ser usado dentro de um <CompareProvider>');
  }
  return context;
}
