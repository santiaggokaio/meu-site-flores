'use client'

import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function CartButton() {
  return (
    <Link href="/carrinho" aria-label="Carrinho">
      <ShoppingCartIcon className="size-6 text-gray-600 hover:text-gray-900" />
    </Link>
  )
}
