'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import allProducts from '@/data/products.json';
import { formatCurrency } from '@/utils/formatCurrency';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
}

export default function OffersSection() {
  const ofertas = (allProducts as Product[]).filter(
    (p) => p.stock > 0 && p.price < 100
  );

  return (
    <section aria-label="Ofertas especiais" className="my-16">
      <h2 className="text-2xl font-semibold text-textDark mb-6 uppercase">
        Ofertas Limitadas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {ofertas.map((p) => (
          <Link
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
              <span className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-md">
                –20%
              </span>
              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button>
                  <Image
                    src="/assets/icons/heart.svg"
                    alt="Wishlist"
                    width={20}
                    height={20}
                  />
                </button>
                <button>
                  <Image
                    src="/assets/icons/compare.svg"
                    alt="Compare"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-base font-semibold text-textDark mb-2">
                {p.name}
              </h3>
              <div className="flex items-center mb-4">
                <span className="text-sm text-gray-500 line-through mr-2">
                  {formatCurrency(p.price * 1.2)}
                </span>
                <span className="text-lg font-bold text-primary">
                  {formatCurrency(p.price)}
                </span>
              </div>
              <button className="mt-auto w-full bg-primary text-white uppercase py-2 rounded-button hover:bg-[#C2006D] transition">
                Comprar
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
