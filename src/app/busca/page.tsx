// src/app/busca/page.tsx

import React, { Suspense } from 'react';
import BuscarClient from './BuscarClient';

export async function generateMetadata() {
  return {
    title: 'Buscar – Meu Site Flores',
    description: 'Encontre o produto que você procura.',
  };
}

export default function SearchPage() {
  return (
    <main>
      <Suspense fallback={<p>Carregando resultados...</p>}>
        <BuscarClient />
      </Suspense>
    </main>
  );
}