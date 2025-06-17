'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

type Product = {
  id: string;
  name: string;
  priceFormatted: string;
  imageUrl: string;
};

type Props = {
  product: Product;
  quantity: number;
};

export default function CartItem({ product, quantity }: Props) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex items-center gap-4 border-b py-4">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={80}
        height={80}
        className="rounded object-cover"
      />
      <div className="flex-1">
        <p className="font-medium">{product.name}</p>
        {/* Exibe o preço formatado, ex.: "R$ 129,90" */}
        <p>{product.priceFormatted}</p>
        <input
          type="number"
          value={quantity}
          min={1}
          onChange={(e) => updateQuantity(product.id, Number(e.target.value))}
          aria-label="Quantidade"
          className="w-16 border text-center"
        />
      </div>
      <button
        onClick={() => removeFromCart(product.id)}
        aria-label="Remover item do carrinho"
        className="text-red-500 hover:text-red-700"
      >
        🗑️
      </button>
    </div>
  );
}
