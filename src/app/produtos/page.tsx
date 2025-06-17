import React from 'react';
import allProducts from '@/data/products.json';
import ProductGrid from './components/ProductGrid';

interface ProductBasic {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
  slug: string; // ← Adicionado para coincidir com o ProductGrid
  // (adicione outros campos do JSON, se houver)
}

export async function generateMetadata() {
  return {
    title: 'Catálogo – Meu Site Flores',
    description: 'Confira todos os produtos disponíveis em nosso e-commerce.',
  };
}

export default function ProdutosPage() {
  const produtos = allProducts as ProductBasic[];
  const totalCount = produtos.length;

  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="mb-8 text-3xl font-semibold uppercase text-textDark">
        Catálogo de Produtos
      </h1>
      {/* Barra de ordenação e contagem */}
      <div className="mb-8 flex flex-col items-center justify-between sm:flex-row">
        <p className="mb-4 text-sm text-textDark sm:mb-0">
          {totalCount} produtos encontrados
        </p>
        <select className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none">
          <option value="default">Ordenar por: Padrão</option>
          <option value="titleAsc">Título Crescente</option>
          <option value="titleDesc">Título Decrescente</option>
          <option value="priceAsc">Preço Crescente</option>
          <option value="priceDesc">Preço Decrescente</option>
        </select>
      </div>
      <ProductGrid products={produtos} />
      {/* Opcional: botões de paginação ou “Carregar mais” aqui */}
    </main>
  );
}
