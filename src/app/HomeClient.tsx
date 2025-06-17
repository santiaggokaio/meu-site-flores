'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'

// Import dinâmico dos componentes internos com fallback de loading
const HeroBanner     = dynamic(() => import('@/components/HeroBanner'),    { ssr: false, loading: () => <Loader /> })
const TrustSection   = dynamic(() => import('@/components/TrustSection'),  { ssr: false, loading: () => <Loader /> })
const OffersSection  = dynamic(() => import('@/components/OffersSection'), { ssr: false, loading: () => <Loader /> })
const CategoriesGrid = dynamic(() => import('@/components/CategoriesGrid'),{ ssr: false, loading: () => <Loader /> })

export default function HomeClient() {
  return (
    <>
      {/* Cabeçalho global */}
      <Header />

      <main role="main" aria-label="Página Inicial" className="container mx-auto px-4">
        {/* Logo centralizado */}
        <div className="flex justify-center py-8">
          <Image
            src="/images/logo.png"
            alt="Logotipo Meu Site Flores"
            width={200}
            height={100}
            priority
          />
        </div>

        {/* Seções principais com loading fallback */}
        <HeroBanner />
        <TrustSection />
        <OffersSection />
        <CategoriesGrid />
      </main>

      {/* Rodapé global */}
      <Footer />
    </>
  )
}
