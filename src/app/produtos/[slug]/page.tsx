import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import allProducts from '@/data/products.json';
import { formatCurrency } from '@/utils/formatCurrency';

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
  // (adicione outros campos do JSON, se houver)
}

// Metadata para SEO e Open Graph
export async function generateMetadata(
  props: {
    params: Promise<Params>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
  }
) {
  const { slug } = await props.params;
  const product = (allProducts as Product[]).find((p) => p.id === slug);
  if (!product) {
    return {
      title: 'Produto Não Encontrado',
      description: 'O produto solicitado não foi encontrado.',
    };
  }
  return {
    title: `${product.name} – Meu Site Flores`,
    description: product.description.slice(0, 150),
    openGraph: {
      images: [product.image],
    },
  };
}

// Gera rotas estáticas no build time
export async function generateStaticParams() {
  return (allProducts as Product[]).map((p) => ({
    slug: p.id,
  }));
}

// Página de produto
export default async function ProductPage(
  props: {
    params: Promise<Params>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
  }
) {
  const { slug } = await props.params;
  const product = (allProducts as Product[]).find((p) => p.id === slug);
  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto px-6 py-16">
      <div className="md:flex md:gap-12">
        {/* Imagem principal */}
        <div className="w-full md:w-1/2 rounded-card overflow-hidden shadow-card mb-8 md:mb-0">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Informações do produto */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="text-3xl font-semibold text-textDark mb-4 uppercase">
            {product.name}
          </h1>
          <p className="text-textDark text-lg mb-4">{formatCurrency(product.price)}</p>
          <p className="text-textDark leading-relaxed mb-6">
            {product.description}
          </p>
          {/* Botão de adicionar ao carrinho */}
          <button
            className="w-full md:w-auto bg-primary text-white uppercase py-3 px-8 rounded-button hover:bg-[#C2006D] transition mb-6"
          >
            Adicionar ao Carrinho
          </button>
          {/* Detalhes adicionais (categoria, estoque, rating) */}
          <div className="text-textDark text-sm space-y-2">
            <p>
              <span className="font-medium">Categoria: </span>
              {product.category}
            </p>
            <p>
              <span className="font-medium">Em estoque: </span>
              {product.stock} unidades
            </p>
            <p>
              <span className="font-medium">Avaliação: </span>
              {product.rating} / 5
            </p>
          </div>
        </div>
      </div>

      {/* Seções opcionais: comentários, produtos relacionados etc. */}
      {/* Exemplo de seção de Produtos Relacionados */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-textDark mb-6 uppercase">
          Produtos Relacionados
        </h2>
        {/* Aqui você pode reutilizar ProductGrid ou criar um grid manual */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Mapeie seus produtos relacionados */}
        </div>
      </section>
    </main>
  );
}
