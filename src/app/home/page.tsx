import React from 'react';
import HeroCarousel from './components/HeroCarousel';
import TrustBadges from '@/components/trust/TrustBadges';
import CategoriesGrid from '@/components/CategoriesGrid';
import OffersSection from '@/components/OffersSection';
import NewArrivalsSection from './components/NewArrivalsSection';
// import NewsletterSignup from '@/components/NewsletterSignup'; // Removido
import TestimonialsCarousel from './components/TestimonialsCarousel';

export async function generateMetadata() {
  return {
    title: 'Home – Meu Site Flores',
    description:
      'Encontre buquês, cestas e presentes exclusivos para surpreender quem você ama.',
  };
}

export default function HomePage() {
  return (
    <main>
      <HeroCarousel />
      <TrustBadges />
      <CategoriesGrid />
      <OffersSection />
      <NewArrivalsSection />
      {/* <NewsletterSignup /> */}
      <TestimonialsCarousel />
    </main>
  );
}
