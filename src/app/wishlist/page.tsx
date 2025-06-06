// src/app/wishlist/page.tsx

import React from 'react';
import WishlistClient from './components/WishlistClient';

export async function generateMetadata() {
  return {
    title: 'Sua Wishlist – Meu Site Flores',
    description: 'Confira os itens que você marcou como favoritos.',
  };
}

export default function WishlistPage() {
  return <WishlistClient />;
}
