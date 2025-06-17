// src/app/categorias/[slug]/page.tsx

import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import allProducts from '@/data/products.json';
import Breadcrumb from '@/components/Breadcrumb';
import SidebarFilters from '@/components/SidebarFilters';
import ProductGrid from '@/app/produtos/components/ProductGrid';
import { categoriasData } from '@/data/categoriasData';
import type { Category, Product } from '@/types';

export async function generateStaticParams() {
  return categoriasData.map((cat: Category) => ({ slug: cat.slug }));
}

// Ajuste: params não é opcional, é Promise<{ slug: string }>
interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string>>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categoriasData.find((c) => c.slug === slug);
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

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const cat = categoriasData.find((c) => c.slug === slug);
  if (!cat) notFound();

  const productsInCategory = (allProducts as Product[]).filter(
    (p) => p.category === slug
  );

  return (
    <main className="container mx-auto px-6 py-12">
      <Breadcrumb
        items={[
          { href: '/', label: 'Home' },
          { href: '/categorias', label: 'Categorias' },
          { href: `/categorias/${slug}`, label: cat.name, current: true },
        ]}
      />

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <SidebarFilters />
        </aside>
        <section className="lg:col-span-3">
          <h1 className="mb-4 text-2xl font-bold uppercase text-gray-800">
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
