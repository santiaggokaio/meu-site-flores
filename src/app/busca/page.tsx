'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Breadcrumb from '@/components/Breadcrumb';
import ProductGrid from '@/app/produtos/components/ProductGrid';
import { useRouter, useSearchParams } from 'next/navigation';
import allProducts from '@/data/products.json';
import type { Product } from '@/types';

export async function generateMetadata() {
  return {
    title: 'Resultados de Busca – Meu Site Flores',
    description: 'Encontre produtos rapidamente usando o campo de busca.',
  };
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('q') ?? '';
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    // forçamos o tipo para Product[]
    const produtos = allProducts as Product[];
    const filtered: Product[] = produtos.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const input = (e.currentTarget.elements.namedItem('search') as HTMLInputElement);
    router.replace(`/busca?q=${encodeURIComponent(input.value)}`);
  };

  return (
    <>
      <Head>
        <title>Busca: {query} – Meu Site Flores</title>
      </Head>
      <main className="container mx-auto px-6 py-12">
        <Breadcrumb
          items={[
            { href: '/', label: 'Home' },
            { href: '/busca', label: 'Busca', current: true },
          ]}
        />

        <form onSubmit={onSubmit} className="mt-6 flex gap-2">
          <input
            name="search"
            defaultValue={query}
            type="text"
            placeholder="O que você procura?"
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-pink-600"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
          >
            Buscar
          </button>
        </form>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
          {results.length} produto{results.length !== 1 && 's'}
        </h2>

        {results.length === 0 ? (
          <p className="text-gray-600">Nenhum produto corresponde à sua busca.</p>
        ) : (
          <ProductGrid products={results} />
        )}
      </main>
    </>
  );
}
