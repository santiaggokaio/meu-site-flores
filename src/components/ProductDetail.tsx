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
    <div className="mx-auto max-w-4xl p-6">
      <div className="flex flex-col gap-6 md:flex-row">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg object-cover"
        />
        <div>
          <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
          <p className="mb-4 text-gray-700">{product.description}</p>
          <p className="mb-6 text-2xl font-semibold text-rose-600">
            {formatPrice(product.price)}
          </p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  )
}