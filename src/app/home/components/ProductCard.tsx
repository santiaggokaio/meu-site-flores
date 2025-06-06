// src/app/home/components/ProductCard.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency } from '@/utils/formatCurrency';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/produtos/${product.id}`}
      className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="mt-2">{formatCurrency(product.price)}</p>
      </div>
    </Link>
  );
}
