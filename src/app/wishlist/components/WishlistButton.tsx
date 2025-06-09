'use client'

import Link from 'next/link'
import { HeartIcon } from '@heroicons/react/24/outline'

export default function WishlistButton() {
  return (
    <Link href="/wishlist" aria-label="Wishlist">
      <HeartIcon className="h-6 w-6 text-gray-600 hover:text-gray-900" />
    </Link>
  )
}
