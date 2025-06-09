'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import CartButton from '@/app/carrinho/components/CartButton'
import CompareButton from '@/app/compare/components/CompareButton'
import WishlistButton from '@/app/wishlist/components/WishlistButton'

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Catálogo', href: '/categorias' },
  { name: 'Contato', href: '/contato' },
  { name: 'Sobre', href: '/sobre' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-rose-600">
            Flores Larissa
          </Link>
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium ${
                  pathname === item.href
                    ? 'text-rose-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/busca" aria-label="Buscar" className="text-gray-600 hover:text-gray-900">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </Link>
            <CompareButton />
            <WishlistButton />
            <CartButton />
          </div>
        </div>
      </div>
    </header>
  )
}