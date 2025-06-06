'use client';

import React from 'react';
import Image from 'next/image';
import { useCompare } from '@/context/CompareContext';

interface CompareProduct {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  // Se houver campos dinâmicos extras, liste-os aqui (ex.: size?: string)
  // Mas sem usar “: any”
}

interface CompareTableRowProps {
  product: CompareProduct;
}

export default function CompareTableRow({ product }: CompareTableRowProps) {
  const { removeFromCompare } = useCompare();

  const handleRemove = () => {
    removeFromCompare(product.id);
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

      {/* Nome */}
      <td className="px-6 py-4">
        <span className="text-gray-800 font-medium">{product.name}</span>
      </td>

      {/* Preço */}
      <td className="px-6 py-4">
        <span className="text-primary font-semibold">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </span>
      </td>

      {/* Botão Remover */}
      <td className="px-6 py-4 text-right">
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
