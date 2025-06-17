'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useWishlist, WishlistItem } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';

interface WishlistTableRowProps {
  product: WishlistItem;
}

export default function WishlistTableRow({ product }: WishlistTableRowProps) {
  const { removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleRemove = () => {
    removeFromWishlist(product.id);
  };

  const handleMoveToCart = () => {
    removeFromWishlist(product.id);
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.imageUrl,
    });
  };

  return (
    <tr className="border-b last:border-0">
      <td className="px-6 py-4">
        <div className="relative size-20">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </td>
      <td className="px-6 py-4">
        <Link
          href={`/produtos/${product.id}`}
          className="font-medium text-gray-800 hover:underline"
        >
          {product.name}
        </Link>
      </td>
      <td className="px-6 py-4">
        <span className="font-semibold text-primary">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </span>
      </td>
      <td className="space-x-4 px-6 py-4">
        <button
          onClick={handleMoveToCart}
          className="text-sm text-blue-600 hover:underline"
        >
          Mover para Carrinho
        </button>
        <button
          onClick={handleRemove}
          className="text-sm text-red-600 hover:underline"
        >
          Remover
        </button>
      </td>
    </tr>
  );
}
