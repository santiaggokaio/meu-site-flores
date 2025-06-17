"use client";

import type { ReactNode } from 'react';
import { CartProvider } from '@/context/CartContext';
import { CompareProvider } from '@/context/CompareContext';
import { WishlistProvider } from '@/context/WishlistContext';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <CartProvider>
      <CompareProvider>
        <WishlistProvider>
          {children}
        </WishlistProvider>
      </CompareProvider>
    </CartProvider>
  );
}
