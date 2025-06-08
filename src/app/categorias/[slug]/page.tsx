'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import allProducts from '@/data/products.json';
import Breadcrumb from '@/components/Breadcrumb';
import SidebarFilters from '@/components/SidebarFilters';
import ProductGrid from '@/app/produtos/components/ProductGrid';
import { categoriasData } from '@/data/categoriasData';
import type { Category, Product } from '@/types';

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  return (categoriasData as Category[]).map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const cat = (categoriasData as Category[]).find((c) => c.slug === params.slug);
  if (!cat) {
    return {
      title: 'Categoria não encontrada',
      description: 'A categoria solicitada não foi encontrada.',
    };
  }
  return {
    title: `${cat.name} – Meu Site Flores`,
    description: cat.description,
  };
}

export default function Page({ params }: { params: Params }) {
  const cat = (categoriasData as Category[]).find((c) => c.slug === params.slug);

  if (!cat) {
    notFound();
  }

  const productsInCategory = (allProducts as Product[]).filter(
    (p) => p.category === params.slug
  );

  return (
    <main className="container mx-auto px-6 py-12">
      <Breadcrumb
        items={[
          { href: '/', label: 'Home' },
          { href: '/categorias', label: 'Categorias' },
          { href: `/categorias/${cat.slug}`, label: cat.name, current: true },
        ]}
      />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <SidebarFilters />
        </aside>
        <section className="lg:col-span-3">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 uppercase">
            {cat.name}
          </h1>
          {productsInCategory.length === 0 ? (
            <p className="text-gray-600">Nenhum produto encontrado.</p>
          ) : (
            <ProductGrid products={productsInCategory} />
          )}
        </section>
      </div>
    </main>
  );
}
