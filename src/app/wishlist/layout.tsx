// src/app/wishlist/layout.tsx
'use client';
import React from 'react';
import WishlistProvider from '@/context/WishlistProvider';

export default function WishlistLayout({ children }: { children: React.ReactNode }) {
  return <WishlistProvider>{children}</WishlistProvider>;
}
