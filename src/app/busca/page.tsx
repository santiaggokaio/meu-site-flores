// src/app/busca/page.tsx
import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import BuscarClient from './BuscarClient'
import allProducts from '@/data/products.json'
import type { Product } from '@/types'

export const metadata: Metadata = {
  title: 'Resultados de Busca – Meu Site Flores',
  description: 'Encontre produtos rapidamente usando o campo de busca.'
}

export default function SearchPage() {
  const products = allProducts as Product[]

  return (
    <main className="container mx-auto px-6 py-12">
      <Breadcrumb
        items={[
          { href: '/', label: 'Home' },
          { href: '/busca', label: 'Busca', current: true },
        ]}
      />

      <Suspense fallback={<p>Carregando resultados…</p>}>
        <BuscarClient products={products} />
      </Suspense>
    </main>
  )
}
