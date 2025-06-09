'use client'

import Image from 'next/image'
import { Product } from '@/types'
import { formatPrice } from '@/utils/format'
import AddToCartButton from '@/app/produtos/[slug]/components/AddToCartButton'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="object-cover rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-rose-600 mb-6">
            {formatPrice(product.price)}
          </p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  )
}