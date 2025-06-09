// src/app/produtos/[slug]/page.tsx

import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import allProducts from '@/data/products.json';
import Breadcrumb from '@/components/Breadcrumb';
// ← Ajuste: ProductDetail em src/components/ProductDetail.tsx
import ProductDetail from '@/components/ProductDetail';
// ← Ajuste: RelatedProductsGrid em src/app/produtos/[slug]/components/RelatedProductsGrid.tsx
import RelatedProductsGrid from './components/RelatedProductsGrid';
import type { Product as RawProduct } from '@/types';

interface Params {
  slug: string;
}

interface Props {
  params?: Promise<Params>;
  searchParams?: Promise<Record<string, string>>;
}

export async function generateStaticParams(): Promise<Params[]> {
  return (allProducts as RawProduct[]).map((p) => ({ slug: p.id }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params!;
  const prod = (allProducts as RawProduct[]).find((p) => p.id === slug);

  if (!prod) {
    return {
      title: 'Produto não encontrado',
      description: 'O produto solicitado não foi encontrado.',
    };
  }

  return {
    title: `${prod.name} – Meu Site Flores`,
    description: prod.description.slice(0, 150),
    openGraph: {
      images: [prod.image],
      title: prod.name,
      description: prod.description.slice(0, 150),
    },
  };
}

export default async function ProductPage(props: Props) {
  const { slug } = await props.params!;
  const raw = (allProducts as RawProduct[]).find((p) => p.id === slug);
  if (!raw) notFound();

  const product = { ...raw, slug: raw.id };
  const related = (allProducts as RawProduct[])
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)
    .map((p) => ({ ...p, slug: p.id }));

  return (
    <main className="container mx-auto px-6 py-12">
      <Breadcrumb
        items={[
          { href: '/', label: 'Home' },
          { href: '/produtos', label: 'Produtos' },
          { href: `/produtos/${product.slug}`, label: product.name, current: true },
        ]}
      />

      <ProductDetail product={product} />

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase">
            Produtos Relacionados
          </h2>
          <RelatedProductsGrid products={related} />
        </section>
      )}
    </main>
  );
}
