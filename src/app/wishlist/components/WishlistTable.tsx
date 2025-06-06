// src/app/wishlist/components/WishlistTable.tsx

import React from 'react';
import Image from 'next/image';

type Product = {
  id: string;
  name: string;
  priceFormatted: string;
  imageUrl: string;
};

type Props = {
  items: Product[];
};

export default function WishlistTable({ items }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border p-2">Imagem</th>
            <th className="border p-2">Produto</th>
            <th className="border p-2">Preço</th>
            <th className="border p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={80}
                  height={80}
                />
              </td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.priceFormatted}</td>
              <td className="border p-2">
                <button
                  onClick={() => {/* chamar addToCart(item.id) */}}
                  aria-label="Adicionar ao carrinho"
                  className="mr-2"
                >
                  🛒
                </button>
                <button
                  onClick={() => {/* chamar removeFromWishlist(item.id) */}}
                  aria-label="Remover da wishlist"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
