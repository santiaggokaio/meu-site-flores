// src/app/busca/BuscarClient.tsx

"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import allProducts from '@/data/products.json';
import ProductCard from '@/app/home/components/ProductCard';

// Extende o tipo para contemplar todos os campos usados pelo ProductCard
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  // Se o JSON tiver mais propriedades (por exemplo, "category", "rating", etc.),
  // você pode declará‐las aqui também, ou usar [key: string]: unknown para permitir campos extras.
  [key: string]: unknown;
}

export default function BuscarClient() {
  const params = useSearchParams();
  const query = params.get('q') ?? '';

  // Agora completa a tipagem corretamente
  const products = allProducts as Product[];

  // Filtra produtos cujo nome ou descrição inclua a query
  const results = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  if (!query) {
    return <p>Por favor, insira um termo de busca na URL (?q=).</p>;
  }

  if (results.length === 0) {
    return <p>Nenhum produto encontrado para “{query}”.</p>;
  }

  return (
    <section>
      <h1>Resultados para “{query}”</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {results.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
