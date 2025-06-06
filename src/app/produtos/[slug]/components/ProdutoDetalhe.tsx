// src/app/produtos/[slug]/components/ProdutoDetalhe.tsx
import React from 'react';

interface ProdutoDetalheProps {
  product: {
    id: string;
    name: string;
    price: number;
  };
}

export default function ProdutoDetalhe({ product }: ProdutoDetalheProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">{product.name}</h1>
      <p className="text-2xl text-primary font-bold">
        R$ {product.price.toFixed(2).replace('.', ',')}
      </p>
      {/* Outras informações rápidas, como disponibilidade, SKU, etc. */}
      <p className="text-gray-600">Disponibilidade: Em estoque</p>
      <p className="text-gray-600">SKU: {product.id}</p>
    </div>
  );
}
