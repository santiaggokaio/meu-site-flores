// CategoryHeader.tsx

import React from 'react';
import Image from 'next/image';

type Props = {
  category: {
    slug: string;
    name: string;
    bannerUrl: string;
  };
};

export default function CategoryHeader({ category }: Props) {
  return (
    <section aria-labelledby="category-title" className="relative mb-8 h-64">
      <Image
        src={category.bannerUrl}
        alt={`Banner da categoria ${category.name}`}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <h1 id="category-title" className="text-3xl font-bold uppercase text-white">
          {category.name}
        </h1>
      </div>
    </section>
  );
}
