'use client'

import { Product } from '@/types'
import { ProductCard } from '@/components/ProductCard'

interface ListaDeProdutosProps {
  products: Product[]
}

export default function ListaDeProdutos({ products }: ListaDeProdutosProps) {
  return (
    <div className="space-y-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}