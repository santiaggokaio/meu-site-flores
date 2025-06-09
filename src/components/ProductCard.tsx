'use client'

import Image from 'next/image'
import Link from 'next/link'
import { HeartIcon } from '@heroicons/react/24/outline'
import { Product } from '@/types'
import { formatPrice } from '@/utils/format'
import AddToCartButton from '@/app/produtos/[slug]/components/AddToCartButton'
import { useWishlist } from '@/context/WishlistContext'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  // Ajuste conforme o shape real do seu WishlistContext
  const { items, addToWishlist, removeFromWishlist } = useWishlist()
  const isWishlisted = items.some(item => item.id === product.id)

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id)
    } else {
      // Constrói o WishlistItem a partir do Product
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.image, // campo requerido pelo WishlistItem
      })
    }
  }

  return (
    <div className="relative border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <button
        onClick={handleWishlistToggle}
        className={`absolute top-2 right-2 p-1 rounded-full ${
          isWishlisted ? 'text-rose-500' : 'text-gray-400'
        }`}
        aria-label="Favoritar"
      >
        <HeartIcon className="h-5 w-5" />
      </button>

      <Link href={`/produtos/${product.slug}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-60 object-cover rounded-md"
        />
        <h3 className="mt-2 text-sm font-medium text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="mt-1 text-base font-semibold text-rose-600">
          {formatPrice(product.price)}
        </p>
      </Link>

      <div className="mt-2">
        <AddToCartButton product={product} />
      </div>
    </div>
  )
}
