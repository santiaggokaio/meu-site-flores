import React, { Suspense } from 'react';
import '@/app/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/app/slick-overrides.css';
import Providers from '@/app/providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrustBadges from '@/components/trust/TrustBadges';
import Loader from '@/components/Loader';

// Export dedicado para o viewport:
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Meu Site Flores',
  description: 'E-commerce de flores e presentes',

  icons: {
    icon: '/favicon.ico',
  },

  // Font preloading e outros metadados
  alternates: {}
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preload"
          href="/fonts/Poppins-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Roboto-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-white font-sans text-gray-800">
        <Providers>
          {/* Header with Suspense */}
          <Suspense fallback={<Loader />}>
            <Header />
          </Suspense>

          {/* Main content area */}
          <main role="main" className="flex-1 px-4 pt-20 md:px-8 lg:px-16">
            <Suspense fallback={<Loader />}>{children}</Suspense>
          </main>

          {/* Trust badges section */}
          <Suspense fallback={<Loader />}>
            <TrustBadges />
          </Suspense>

          {/* Footer */}
          <Suspense fallback={<Loader />}>
            <Footer />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
