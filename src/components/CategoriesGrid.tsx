// src/components/CategoriesGrid.tsx
'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Loader from '@/components/Loader'
import { getCategorias, type Categoria } from '@/lib/api'

export default function CategoriesGrid() {
  const [categorias, setCategorias] = useState<Categoria[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCategorias()
        setCategorias(data)
      } catch (err) {
        console.error('Erro ao carregar categorias:', err)
        setCategorias([])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <Loader />
  }

  if (!categorias || categorias.length === 0) {
    return <p className="text-center text-gray-500">Nenhuma categoria encontrada.</p>
  }

  return (
    <section aria-labelledby="categories-heading" className="my-16">
      <h2 id="categories-heading" className="sr-only">Categorias de produtos</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {categorias.map((cat: Categoria) => (
          <Link
            key={cat.slug}
            href={`/categorias/${cat.slug}`}
            className="group relative overflow-hidden rounded-card shadow-card"
          >
            <div className="relative">
              <Image
                src={cat.imageUrl ?? `/images/categories/${cat.slug}.jpg`}
                alt={cat.name}
                width={400}
                height={250}
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="text-xl font-semibold uppercase tracking-wide text-white">
                  {cat.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
