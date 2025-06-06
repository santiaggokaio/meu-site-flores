'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { useWishlist, WishlistItem } from '@/context/WishlistContext';

type Props = {
  items: WishlistItem[]; // cada item já contém { id, name, price, imageUrl }
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
    <div className="flex gap-4 my-4">
      <button
        onClick={handleAddAllToCart}
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        Adicionar Todos ao Carrinho
      </button>
      <button
        onClick={clearWishlist}
        className="bg-red-600 text-white py-2 px-4 rounded"
      >
        Limpar Wishlist
      </button>
    </div>
  );
}
