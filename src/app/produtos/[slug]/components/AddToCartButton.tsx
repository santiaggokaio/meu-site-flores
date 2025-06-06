'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';

interface Props {
  productId: string;
  name: string;
  price: number;
  image: string;
}

export default function AddToCartButton({ productId, name, price, image }: Props) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() =>
        addToCart({
          id: productId,
          name,
          price,
          quantity: 1,
          image,
        })
      }
      className="w-full md:w-auto bg-primary text-white uppercase py-3 px-8 rounded-button hover:bg-[#C2006D] transition"
    >
      Adicionar ao Carrinho
    </button>
  );
}
