// src/app/busca/BuscarClient.tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import type { Product } from '@/types'
import ProductGrid from '@/app/produtos/components/ProductGrid'

interface BuscarClientProps {
  products: Product[]
}

export default function BuscarClient({ products }: BuscarClientProps) {
  const params = useSearchParams()
  const router = useRouter()
  const initialQuery = params.get('q') ?? ''
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<Product[]>(products)

  useEffect(() => {
    const lower = query.toLowerCase()
    setResults(products.filter(p => p.name.toLowerCase().includes(lower)))
    router.replace(`/busca?q=${encodeURIComponent(query)}`, { scroll: false })
  }, [query, products, router])

  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    const value = (e.currentTarget.elements.namedItem('search') as HTMLInputElement)
      .value
    setQuery(value)
  }

  return (
    <>
      <form onSubmit={onSubmit} className="mt-6 flex gap-2">
        <input
          name="search"
          defaultValue={query}
          type="text"
          placeholder="O que você procura?"
          className="flex-1 border rounded-full px-4 py-2 focus:border-pink-600"
        />
        <button
          type="submit"
          className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700"
        >
          Buscar
        </button>
      </form>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        {results.length} produto{results.length !== 1 && 's'}
      </h2>

      {results.length === 0 ? (
        <p className="text-gray-600">Nenhum produto corresponde à sua busca.</p>
      ) : (
        <ProductGrid products={results} />
      )}
    </>
  )
}
