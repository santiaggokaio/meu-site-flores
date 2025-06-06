'use client';

import React from 'react';
import Image from 'next/image';
import allProducts from '@/data/products.json';
import { formatCurrency } from '@/utils/formatCurrency';

interface ProductBasic {
  id: string;
  name: string;
  price: number;
  image: string;
  // caso existam outros campos no JSON, pode declará-los aqui (opcional)
}

export default function NewArrivalsSection() {
  // Como o JSON não possui campo createdAt, pegamos apenas os primeiros 4
  const novos = (allProducts as ProductBasic[]).slice(0, 4);

  return (
    <section aria-label="Você também pode gostar" className="my-16">
      <h2 className="text-2xl font-semibold text-textDark mb-6 uppercase">
        Você também pode gostar
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {novos.map((p) => (
          <a
            key={p.id}
            href={`/produtos/${p.id}`}
            className="relative bg-white rounded-card shadow-card overflow-hidden group flex flex-col"
          >
            <div className="w-full h-56 relative">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-base font-semibold text-textDark mb-2">
                {p.name}
              </h3>
              <span className="text-lg font-bold text-primary">
                {formatCurrency(p.price)}
              </span>
              <button className="mt-auto w-full bg-primary text-white uppercase py-2 rounded-button hover:bg-[#C2006D] transition">
                Comprar
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
