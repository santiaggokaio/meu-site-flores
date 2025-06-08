'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import ProductImageGallery from './components/ProductImageGallery';
import ProductDescription from './components/ProductDescription';
import AddToCartButton from './components/AddToCartButton';
import RelatedProductsGrid from './components/RelatedProductsGrid';
import allProducts from '@/data/products.json';
import { formatCurrency } from '@/utils/formatCurrency';
import type { Product as RawProduct } from '@/types';

interface Params {
  slug: string;
}

// Extend the raw JSON product with `slug` field
interface Product extends RawProduct {
  slug: string;
}

export async function generateStaticParams() {
  return (allProducts as RawProduct[]).map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const product = (allProducts as RawProduct[]).find((p) => p.id === params.slug);
  if (!product) {
    return { title: 'Produto não encontrado' };
  }
  return {
    title: `${product.name} – Meu Site Flores`,
    description: product.description.substring(0, 150),
    openGraph: { images: [product.image] },
  };
}

export default function ProductPage({ params }: { params: Params }) {
  const raw = (allProducts as RawProduct[]).find((p) => p.id === params.slug);
  if (!raw) notFound();

  // Add slug field
  const product: Product = { ...raw, slug: raw.id };

  const related: Product[] = (allProducts as RawProduct[])
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)
    .map((p) => ({ ...p, slug: p.id }));

  const images = [product.image];

  return (
    <main className="container mx-auto px-6 py-12">
      <Breadcrumb
        items={[
          { href: '/', label: 'Home' },
          { href: '/produtos', label: 'Produtos' },
          { href: `/produtos/${product.slug}`, label: product.name, current: true },
        ]}
      />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <ProductImageGallery images={images} />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 uppercase">
            {product.name}
          </h1>
          <p className="text-2xl font-semibold text-pink-600 mb-4">
            {formatCurrency(product.price)}
          </p>
          <ProductDescription description={product.description} />
          <div className="mt-6">
            <AddToCartButton
              productId={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          </div>
          <div className="mt-8 text-gray-600 text-sm space-y-2">
            <p>
              <span className="font-medium">Categoria:</span> {product.category}
            </p>
            <p>
              <span className="font-medium">Em estoque:</span> {product.stock}
            </p>
            <p>
              <span className="font-medium">Avaliação:</span> {product.rating} / 5
            </p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase">
            Produtos Relacionados
          </h2>
          <RelatedProductsGrid related={related} />
        </section>
      )}
    </main>
  );
}