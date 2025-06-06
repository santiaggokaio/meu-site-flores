'use client';

import React from 'react';
import Image from 'next/image';
import HeroCarousel from '@/app/home/components/HeroCarousel';
import TrustBadges from '@/components/trust/TrustBadges';
import CategoriesGrid from '@/components/CategoriesGrid';
// … outros imports de componentes da home, se houver

export default function HomeClient() {
  return (
    <main>
      {/* Exemplo de logo local */}
      <Image
        src="/images/logo.png"
        alt="Logotipo Meu Site Flores"
        width={200}
        height={100}
      />

      {/* Componentes principais da home */}
      <HeroCarousel />
      <TrustBadges />
      <CategoriesGrid />
      {/* … demais seções da home … */}
    </main>
  );
}
