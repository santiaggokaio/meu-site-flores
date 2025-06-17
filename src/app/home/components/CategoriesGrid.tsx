import React from 'react';
import Image from 'next/image';
import categorias from '@/data/categorias';

export default function CategoriesGrid() {
  return (
    <section aria-label="Categorias de produtos" className="my-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {categorias.map((cat) => (
          <a
            key={cat.slug}
            href={`/categorias/${cat.slug}`}
            className="group relative overflow-hidden rounded-card shadow-card"
          >
            <Image
              src={`/images/categories/${cat.slug}.jpg`}
              alt={cat.name}
              width={400}
              height={250}
              className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="text-xl font-semibold uppercase tracking-wide text-white">
                {cat.name}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
