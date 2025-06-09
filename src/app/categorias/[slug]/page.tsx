// src/app/categorias/[slug]/page.tsx
import React from 'react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import allProducts from '@/data/products.json'
import Breadcrumb from '@/components/Breadcrumb'
import SidebarFilters from '@/components/SidebarFilters'
import ProductGrid from '@/app/produtos/components/ProductGrid'
import { categoriasData } from '@/data/categoriasData'
import type { Category, Product } from '@/types'

// 1) rotas estáticas
export async function generateStaticParams() {
  return categoriasData.map((cat: Category) => ({ slug: cat.slug }))
}

// 2) Props compatível com .next/types/app/categorias/[slug]/page.d.ts
interface Props {
  params?: Promise<{ slug: string }>
  searchParams?: Promise<Record<string, string>>
}

// 3) metadata
export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params!
  const cat = categoriasData.find(c => c.slug === slug)
  if (!cat) {
    return {
      title: 'Categoria não encontrada',
      description: 'A categoria solicitada não foi encontrada.',
    }
  }
  return {
    title: `${cat.name} – Meu Site Flores`,
    description: cat.description,
  }
}

// 4) Page
export default async function Page(props: Props) {
  const { slug } = await props.params!
  const cat = categoriasData.find(c => c.slug === slug)
  if (!cat) notFound()

  const productsInCategory = (allProducts as Product[]).filter(
    p => p.category === slug
  )

  return (
    <main className="container mx-auto px-6 py-12">
      <Breadcrumb
        items={[
          { href: '/', label: 'Home' },
          { href: '/categorias', label: 'Categorias' },
          { href: `/categorias/${slug}`, label: cat.name, current: true },
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
  )
}
