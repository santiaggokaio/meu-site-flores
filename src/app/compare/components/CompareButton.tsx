'use client'

import Link from 'next/link'
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline'

export default function CompareButton() {
  return (
    <Link href="/compare" aria-label="Comparar">
      <ArrowsRightLeftIcon className="size-6 text-gray-600 hover:text-gray-900" />
    </Link>
  )
}
