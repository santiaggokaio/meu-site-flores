'use client'

import { useCart } from '@/context/CartContext'
import { Product } from '@/types'

interface Props {
  product: Product
}

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart()

  return (
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
      className="w-full rounded-button bg-primary px-8 py-3 uppercase text-white transition hover:bg-[#C2006D] md:w-auto"
    >
      Adicionar ao Carrinho
    </button>
  )
}
