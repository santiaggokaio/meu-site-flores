'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { useWishlist, WishlistItem } from '@/context/WishlistContext';

type Props = {
  items: WishlistItem[];
};

export default function WishlistActions({ items }: Props) {
  const { addToCart } = useCart();
  const { clearWishlist } = useWishlist();

  const handleAddAllToCart = () => {
    items.forEach((item) => {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.imageUrl,
      });
    });
  };

  return (
    <div className="my-4 flex gap-4">
      <button
        onClick={handleAddAllToCart}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Adicionar Todos ao Carrinho
      </button>
      <button
        onClick={clearWishlist}
        className="rounded bg-red-600 px-4 py-2 text-white"
      >
        Limpar Wishlist
      </button>
    </div>
  );
}
