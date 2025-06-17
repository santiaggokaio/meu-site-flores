// src/components/OffersSection.tsx
import React, { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Loader from '@/components/Loader'

export default function OffersSection(): JSX.Element {
  // Dados estáticos - se futuramente vierem da API, mova fetch para cá
  const limitedEditionItems = [1, 2, 3, 4]

  return (
    <section
      id="offers-section"
      aria-labelledby="offers-section-heading"
      className="bg-white py-12"
    >
      <h2 id="offers-section-heading" className="sr-only">
        Seção de Ofertas
      </h2>

      <div className="container mx-auto px-6">
        {/* Banner principal de Ofertas */}
        <div className="relative mb-8 h-64 w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/offers/limited-offer-banner.jpg"
            alt="Banner: Ofertas Limitadas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black/30 p-8">
            <h3 className="mb-2 text-3xl font-bold text-white md:text-4xl">
              Ofertas Limitadas!
            </h3>
            <Link
              href="/produtos"
              className="inline-block rounded-full bg-pink-600 px-6 py-2 font-semibold text-white transition hover:bg-pink-700"
            >
              Ver Ofertas
            </Link>
          </div>
        </div>

        {/* Edição Limitada */}
        <h4 className="mb-6 text-2xl font-bold text-gray-800">Edição Limitada</h4>
        <Suspense fallback={<Loader />}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {limitedEditionItems.map((i) => (
              <Link
                href={`/produtos/edicao-${i}`}
                key={i}
                className="group block overflow-hidden rounded-2xl bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={`/images/offers/edicao-${i}.jpg`}
                    alt={`Flor da Edição Limitada nº ${i}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="p-4">
                  <h5 className="mb-1 text-base font-semibold text-gray-800">
                    Edição {i}
                  </h5>
                  <p className="font-bold text-pink-600">R$ 199,90</p>
                </div>
              </Link>
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  )
}
