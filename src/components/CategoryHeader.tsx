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
    <section aria-labelledby="category-title" className="relative h-64 mb-8">
      <Image
        src={category.bannerUrl}
        alt={`Banner da categoria ${category.name}`}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h1 id="category-title" className="text-3xl text-white font-bold uppercase">
          {category.name}
        </h1>
      </div>
    </section>
  );
}
