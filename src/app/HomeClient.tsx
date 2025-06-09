// src/app/HomeClient.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import TrustSection from '@/components/TrustSection';
import OffersSection from '@/components/OffersSection';
import CategoriesGrid from '@/components/CategoriesGrid';

export default function HomeClient() {
  return (
    <main>
      {/* Logo */}
      <div className="flex justify-center py-8">
        <Image
          src="/images/logo.png"
          alt="Logotipo Meu Site Flores"
          width={200}
          height={100}
        />
      </div>

      {/* Seções principais */}
      <HeroBanner />
      <TrustSection />
      <OffersSection />
      <CategoriesGrid />
    </main>
  );
}
