// src/app/layout.tsx

import React from 'react';
import Head from 'next/head';
import '@/app/globals.css';
import Providers from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Meu Site Flores',
  description: 'E-commerce de flores e presentes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Head>
        {/* Pré-carregar fontes */}
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

        {/* Meta de CSP */}
        <meta
          httpEquiv="Content-Security-Policy"
          content={`
            default-src 'self';
            img-src 'self' https://example.com https://images.unsplash.com;
            script-src 'self' 'unsafe-inline';
            style-src 'self' 'unsafe-inline';
          `}
        />
      </Head>
      <body>
        <Providers>
          <Header />
          <main className="pt-[72px]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
