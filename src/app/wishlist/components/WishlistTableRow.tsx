'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useWishlist, WishlistItem } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';

interface WishlistTableRowProps {
  product: WishlistItem; // { id, name, price, imageUrl }
}

export default function WishlistTableRow({ product }: WishlistTableRowProps) {
  const { removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleRemove = () => {
    removeFromWishlist(product.id);
  };

  const handleMoveToCart = () => {
    // 1. Remove da wishlist
    removeFromWishlist(product.id);
    // 2. Adiciona ao carrinho com quantidade 1
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
      {/* Imagem */}
      <td className="px-6 py-4">
        <div className="w-20 h-20 relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </td>

      {/* Nome (link para página de detalhe) */}
      <td className="px-6 py-4">
        <Link
          href={`/produtos/${product.id}`}
          className="text-gray-800 font-medium hover:underline"
        >
          {product.name}
        </Link>
      </td>

      {/* Preço */}
      <td className="px-6 py-4">
        <span className="text-primary font-semibold">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </span>
      </td>

      {/* Ações: mover ao carrinho e remover */}
      <td className="px-6 py-4 space-x-4">
        <button
          onClick={handleMoveToCart}
          className="text-blue-600 hover:underline text-sm"
        >
          Mover para Carrinho
        </button>
        <button
          onClick={handleRemove}
          className="text-red-600 hover:underline text-sm"
        >
          Remover
        </button>
      </td>
    </tr>
  );
}
