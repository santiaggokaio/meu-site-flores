'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import Loader from '@/components/Loader';

const badges = [
  { src: '/badges/pagseguro.svg', alt: 'Logo PagSeguro' },
  { src: '/badges/mercadopago.svg', alt: 'Logo Mercado Pago' },
  { src: '/badges/whatsapp.svg', alt: 'Logo WhatsApp' },
];

export default function TrustBadges() {
  return (
    <Suspense fallback={<Loader />}>
      <section
        aria-label="Trust Badges"
        className="my-4 flex items-center justify-center gap-6 px-4 sm:px-0"
      >
        {badges.map(({ src, alt }) => (
          <div key={src} className="shrink-0">
            <Image
              src={src}
              alt={alt}
              width={120}
              height={40}
              role="img"
            />
          </div>
        ))}
      </section>
    </Suspense>
  );
}
