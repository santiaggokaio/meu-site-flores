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
    <div className="border rounded-lg overflow-hidden">
      <Link href={`/categorias/${category.slug}`}>
        <div className="relative w-full h-40">
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
