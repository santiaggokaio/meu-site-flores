// src/app/home/page.tsx

import React from 'react';
import HeroCarousel from './components/HeroCarousel';
import TrustBadges from '@/components/trust/TrustBadges';
import CategoriesGrid from '@/components/CategoriesGrid';
import OffersSection from '@/components/OffersSection';
import NewArrivalsSection from './components/NewArrivalsSection';
import NewsletterSignup from './components/NewsletterSignup';

export default function HomePage() {
  return (
    <main className="pt-24">
      <HeroCarousel />
      <TrustBadges />
      <CategoriesGrid />
      <OffersSection />
      <NewArrivalsSection />
      <NewsletterSignup />
    </main>
  );
}
