// src/components/OffersSection.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function OffersSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        {/* Banner principal de Ofertas */}
        <div className="relative w-full h-64 mb-8 overflow-hidden rounded-2xl">
          <Image
            src="/images/offers/limited-offer-banner.jpg"
            alt="Ofertas Limitadas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-start p-8">
            <h3 className="text-3xl md:text-4xl text-white font-bold mb-2">
              Ofertas Limitadas!
            </h3>
            <Link
              href="/produtos"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-semibold transition"
            >
              Ver Ofertas
            </Link>
          </div>
        </div>

        {/* Edição Limitada */}
        <h4 className="text-2xl font-bold text-gray-800 mb-6">Edição Limitada</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Link
              href={`/produtos/edicao-${i}`}
              key={i}
              className="block bg-white rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="relative w-full h-56">
                <Image
                  src={`/images/offers/edicao-${i}.jpg`}
                  alt={`Edição Limitada ${i}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="p-4">
                <h5 className="text-base font-semibold text-gray-800 mb-1">
                  Edição {i}
                </h5>
                <p className="text-pink-600 font-bold">R$ 199,90</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
