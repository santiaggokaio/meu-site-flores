'use client';

import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import type { Settings } from 'react-slick';

// Define as props do react-slick + children opcionais
type SlickProps = Settings & { children?: ReactNode };

// Carrega o componente react-slick apenas no client
const ProductCarouselComponent = dynamic<SlickProps>(
  () => import('react-slick').then((mod) => mod.default),
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
  // Configurações de exemplo para o react-slick
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section aria-label="Carrossel de produtos">
      <h2>Produtos em destaque</h2>
      <div>
        <ProductCarouselComponent {...settings}>
          {products.map((p) => (
            <div key={p.id} className="relative mx-auto size-64">
              <Image
                src={p.imageUrl}
                alt={p.name}
                fill
                style={{ objectFit: 'contain' }}
              />
              <div className="absolute bottom-2 left-2 rounded bg-black/50 p-1 text-white">
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
