// src/app/busca/BuscarClient.tsx

'use client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import type { Product } from '@/types'
import ProductGrid from '@/app/produtos/components/ProductGrid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

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
          className="flex-1 rounded-full border px-4 py-2 focus:border-pink-600"
        />
        <button
          type="submit"
          className="rounded-full bg-pink-600 px-6 py-2 text-white hover:bg-pink-700"
        >
          <MagnifyingGlassIcon className="size-5" />
          Buscar
        </button>
      </form>

      <h2 className="mb-4 mt-8 text-2xl font-bold">
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
