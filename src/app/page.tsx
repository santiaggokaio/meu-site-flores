import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import HomeClient from './HomeClient';

export async function generateMetadata() {
  return {
    title: 'Meu Site Flores – Home',
    description: 'Encontre os melhores buquês e presentes para todas as ocasiões.',
  };
}

export default async function Page() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <Suspense fallback={<Loader />}>
          <HomeClient />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
