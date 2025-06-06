'use client';

import React, { ComponentType, ReactNode } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const ProductCarouselComponent: ComponentType<{ children: ReactNode }> = dynamic(
  () => import('react-slick'),
  { ssr: false }
);

export type Product = {
  id: string;
  name: string;
  priceFormatted: string;
  imageUrl: string;
};

type Props = {
  products: Product[];
};

export default function ProductCarousel({ products }: Props) {
  return (
    <section aria-label="Carrossel de produtos">
      <h2>Produtos em destaque</h2>
      <div>
        <ProductCarouselComponent>
          {products.map((p) => (
            <div key={p.id} className="relative w-64 h-64 mx-auto">
              <Image
                src={p.imageUrl}
                alt={p.name}
                fill
                style={{ objectFit: 'contain' }}
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white p-1 rounded">
                <p className="text-sm">{p.name}</p>
                <p className="text-xs">{p.priceFormatted}</p>
              </div>
            </div>
          ))}
        </ProductCarouselComponent>
      </div>
    </section>
  );
}
