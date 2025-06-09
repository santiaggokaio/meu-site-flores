'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HeartIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/utils/format'
import { Product } from '@/types'

export interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <div className="relative border rounded-lg overflow-hidden">
      <Link href={`/produtos/${product.slug}`}>
        <div className="w-full h-56 relative">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            <button aria-label="Favoritar">
              <HeartIcon className="w-5 h-5 text-white" />
            </button>
            <button aria-label="Comparar">
              <ArrowsRightLeftIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="mt-2">{formatPrice(product.price)}</p>
        <button
          onClick={() =>
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1,
              image: product.image,
            })
          }
          className="mt-4 w-full bg-primary text-white py-2 rounded-md"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  )
}
