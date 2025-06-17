import React from 'react';
import Link from 'next/link';        // ← adicionado
import Image from 'next/image';

type Props = {
  category: {
    slug: string;
    name: string;
    imageUrl: string;
  };
};

export default function CategoriaCard({ category }: Props) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <Link href={`/categorias/${category.slug}`}>
        <div className="relative h-40 w-full">
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="p-4">
          <h3>{category.name}</h3>
        </div>
      </Link>
    </div>
  );
}
