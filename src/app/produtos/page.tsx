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
      <h1 className="text-3xl font-semibold text-textDark mb-8 uppercase">
        Catálogo de Produtos
      </h1>
      {/* Barra de ordenação e contagem */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <p className="text-textDark text-sm mb-4 sm:mb-0">
          {totalCount} produtos encontrados
        </p>
        <select className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none">
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
