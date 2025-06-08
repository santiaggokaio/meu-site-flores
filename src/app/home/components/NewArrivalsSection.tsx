// src/app/home/components/NewArrivalsSection.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import allProducts from '@/data/products.json';
import { formatCurrency } from '@/utils/formatCurrency';

interface ProductBasic {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function NewArrivalsSection() {
  const novidades = (allProducts as ProductBasic[]).slice(0, 8); // primeiros 8 itens

  return (
    <section aria-label="Novidades" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 uppercase">
          Novidades
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {novidades.map((p) => (
            <div key={p.id} className="flex">
              <Link href={`/produtos/${p.id}`} className="w-full">
                <div className="relative w-full h-56 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-base font-semibold text-gray-800">
                    {p.name}
                  </h3>
                  <p className="text-pink-600 font-bold mt-1">
                    {formatCurrency(p.price)}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
