// src/app/produtos/[slug]/page.tsx
import React from 'react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import allProducts from '@/data/products.json'
import Breadcrumb from '@/components/Breadcrumb'
import ProductImageGallery from './components/ProductImageGallery'
import ProductDescription from './components/ProductDescription'
import AddToCartButton from './components/AddToCartButton'
import RelatedProductsGrid from './components/RelatedProductsGrid'
import { formatCurrency } from '@/utils/formatCurrency'
import type { Product as RawProduct } from '@/types'

// Parâmetros da rota
interface Params { slug: string }

// Props compatível com .next/types/app/produtos/[slug]/page.d.ts
interface Props {
  params?: Promise<Params>
  searchParams?: Promise<Record<string, string>>
}

// 1) rotas estáticas
export async function generateStaticParams(): Promise<Params[]> {
  return (allProducts as RawProduct[]).map(p => ({ slug: p.id }))
}

// 2) metadata
export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params!
  const prod = (allProducts as RawProduct[]).find(p => p.id === slug)

  if (!prod) {
    return {
      title: 'Produto não encontrado',
      description: 'O produto solicitado não foi encontrado.',
    }
  }

  return {
    title: `${prod.name} – Meu Site Flores`,
    description: prod.description.slice(0, 150),
    openGraph: {
      images: [prod.image],
      title: prod.name,
      description: prod.description.slice(0, 150),
    },
  }
}

// 3) Page
export default async function ProductPage(props: Props) {
  const { slug } = await props.params!
  const raw = (allProducts as RawProduct[]).find(p => p.id === slug)
  if (!raw) notFound()

  const product = { ...raw, slug: raw.id }
  const related = (allProducts as RawProduct[])
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)
    .map(p => ({ ...p, slug: p.id }))

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
        <ProductImageGallery images={[product.image]} />
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
            <p><span className="font-medium">Categoria:</span> {product.category}</p>
            <p><span className="font-medium">Em estoque:</span> {product.stock}</p>
            <p><span className="font-medium">Avaliação:</span> {product.rating} / 5</p>
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
  )
}
