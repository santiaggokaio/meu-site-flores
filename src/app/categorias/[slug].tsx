import React from 'react';
import { notFound } from 'next/navigation';
import allProducts from '@/data/products.json';
import categoriasData from '@/data/categorias'; // array de { slug, name, description }
import ProductGrid from '@/app/produtos/components/ProductGrid';

type Params = { slug: string };

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
  slug: string;     // ← Adicionado para coincidir com o ProductGrid
  // (adicione aqui quaisquer outras propriedades que o JSON realmente tiver)
}

export async function generateStaticParams() {
  return categoriasData.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const cat = categoriasData.find((c) => c.slug === params.slug);
  if (!cat) {
    return {
      title: 'Categoria Não Encontrada',
      description: 'A categoria solicitada não foi encontrada.',
    };
  }
  return {
    title: `${cat.name} – Meu Site Flores`,
    description: cat.description,
  };
}

export default function CategoriaPage({ params }: { params: Params }) {
  const cat = categoriasData.find((c) => c.slug === params.slug);
  if (!cat) {
    notFound();
  }

  const productsInCategory = (allProducts as Product[]).filter(
    (p) => p.category === params.slug
  );

  return (
    <main>
      <h1>{cat.name}</h1>
      <p>{cat.description}</p>
      {productsInCategory.length === 0 ? (
        <p>Nenhum produto encontrado nesta categoria.</p>
      ) : (
        <ProductGrid products={productsInCategory} />
      )}
    </main>
  );
}
