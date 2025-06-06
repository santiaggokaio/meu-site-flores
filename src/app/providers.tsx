// src/app/providers.tsx

"use client";

import React from 'react';
import { CartProvider } from '@/context/CartContext';
import { CompareProvider } from '@/context/CompareContext';
import { WishlistProvider } from '@/context/WishlistContext';

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
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
