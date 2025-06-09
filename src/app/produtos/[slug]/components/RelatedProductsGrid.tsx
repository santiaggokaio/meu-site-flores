'use client'

import { Product } from '@/types'
import { ProductCard } from '@/components/ProductCard'

interface RelatedProductsGridProps {
  products: Product[]
}

export default function RelatedProductsGrid({ products }: RelatedProductsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}