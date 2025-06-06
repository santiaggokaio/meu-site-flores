'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';

type Props = {
  productId: string;
};

export default function ActionButtons({ productId }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="flex gap-2">
      <button
        onClick={() =>
          addToCart({
            id: productId,
            name: '',      // Se desejar, busque nome a partir de contexto. Aqui pode ficar vazio ou buscar via hook.
            price: 0,      // Idem; ou remova se não for usado diretamente.
            quantity: 1,
            image: '',     // Idem; ou remova/image placeholder.
          })
        }
        aria-label="Adicionar ao carrinho"
        className="bg-green-600 text-white py-2 px-4 rounded"
      >
        Comprar
      </button>
    </div>
  );
}
