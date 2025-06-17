// src/app/home/page.tsx
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import HeroCarousel from './components/HeroCarousel'
import TrustBadges from '@/components/trust/TrustBadges'
import OffersSection from '@/components/OffersSection'
import NewArrivalsSection from './components/NewArrivalsSection'
import NewsletterSignup from './components/NewsletterSignup'

// Importa CategoriesGrid dinamicamente para evitar erro de Promise<Element>
const CategoriesGrid = dynamic(() => import('@/components/CategoriesGrid'), {
  ssr: true,
})

export default async function HomePage() {
  return (
    <>
      <Header />
      <main role="main" className="pt-24">
        {/* Hero */}
        <section aria-label="Destaques" className="relative">
          <Suspense fallback={<Loader />}>
            <HeroCarousel />
          </Suspense>
        </section>

        {/* Trust Badges */}
        <section aria-label="Confiança e Garantias" className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <Suspense fallback={<Loader />}>
              <TrustBadges />
            </Suspense>
          </div>
        </section>

        {/* Categories */}
        <section aria-label="Categorias" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-2xl font-semibold">
              Categorias que você pode gostar
            </h2>
            <Suspense fallback={<Loader />}>
              <CategoriesGrid />
            </Suspense>
          </div>
        </section>

        {/* Offers / Promoções */}
        <section aria-label="Ofertas Limitadas" className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-2xl font-semibold">Ofertas Limitadas</h2>
            <Suspense fallback={<Loader />}>
              <OffersSection />
            </Suspense>
          </div>
        </section>

        {/* Novidades */}
        <section aria-label="Novidades" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-2xl font-semibold">Novidades</h2>
            <Suspense fallback={<Loader />}>
              <NewArrivalsSection />
            </Suspense>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section
          aria-label="Inscreva-se na Newsletter"
          className="bg-gray-50 py-12"
        >
          <div className="container mx-auto px-4">
            <Suspense fallback={<Loader />}>
              <NewsletterSignup />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
