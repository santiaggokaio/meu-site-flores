import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import categorias from '@/data/categorias';

export default function CategoriesGrid() {
  return (
    <section aria-label="Categorias de produtos" className="my-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categorias.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categorias/${cat.slug}`}
            className="relative overflow-hidden rounded-card shadow-card group"
          >
            <Image
              src={`/images/categories/${cat.slug}.jpg`}
              alt={cat.name}
              width={400}
              height={250}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-xl font-semibold uppercase tracking-wide">
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
