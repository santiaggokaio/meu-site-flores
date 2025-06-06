'use client';

import React from 'react';
import ProductCard from '@/app/produtos/components/ProductCard';

type Props = {
  products: Array<{
    id: string;
    slug: string;
    name: string;
    price: number;
    image: string;
  }>;
};

export default function ListaDeProdutos({ products }: Props) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={{
            id: p.id,
            slug: p.slug,
            name: p.name,
            price: p.price,
            image: p.image,
          }}
        />
      ))}
    </div>
  );
}
