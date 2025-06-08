'use client';

import React, { useState, KeyboardEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu as MenuIcon,
  X as XIcon,
  Heart,
  Repeat,
  ShoppingCart,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useCompare } from '@/context/CompareContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();
  const { items: wishlist } = useWishlist();
  const { compare } = useCompare();

  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const wishlistCount = wishlist.length;
  const compareCount = compare.length;

  const toggleMenu = () => setMenuOpen((o) => !o);

  const handleKey = (e: KeyboardEvent, fn: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fn();
    }
  };

  // Handlers reais (substitua pelos seus navegadores ou lógicas)
  const handleCompare = () => {/* TODO: navegar para /compare */};
  const handleWishlist = () => {/* TODO: navegar para /wishlist */};
  const handleCart = () => {/* TODO: navegar para /carrinho */};

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/" aria-label="Logotipo Meu Site Flores">
          <Image
            src="/images/logo.png"
            alt="Logotipo Meu Site Flores"
            width={160}
            height={60}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Menu principal">
          {['/', '/produtos', '/categorias', '/contato', '/sobre'].map((href, i) => {
            const labels = ['Home', 'Produtos', 'Categorias', 'Contato', 'Sobre'];
            return (
              <Link
                key={href}
                href={href}
                className="hover:text-pink-600 transition-colors"
              >
                {labels[i]}
              </Link>
            );
          })}

          <button onClick={handleCompare} className="relative hover:text-pink-600 transition-colors" aria-label="Comparar produtos">
            <Repeat size={20} />
            {compareCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {compareCount}
              </span>
            )}
          </button>

          <button onClick={handleWishlist} className="relative hover:text-pink-600 transition-colors" aria-label="Lista de desejos">
            <Heart size={20} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {wishlistCount}
              </span>
            )}
          </button>

          <button onClick={handleCart} className="relative hover:text-pink-600 transition-colors" aria-label="Carrinho">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {cartCount}
              </span>
            )}
          </button>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="md:hidden bg-white shadow-md px-6 pt-4 pb-6 border-t border-gray-200"
          aria-label="Menu móvel"
        >
          <ul className="flex flex-col gap-4 text-base text-gray-800 font-medium">
            {['Home', 'Produtos', 'Categorias', 'Contato', 'Sobre'].map((label, idx) => {
              const hrefs = ['/', '/produtos', '/categorias', '/contato', '/sobre'];
              return (
                <li key={label}>
                  <Link href={hrefs[idx]}>
                    <button
                      type="button"
                      className="w-full text-left"
                      onClick={toggleMenu}
                    >
                      {label}
                    </button>
                  </Link>
                </li>
              );
            })}

            {[
              { label: `Comparar (${compareCount})`, onClick: handleCompare },
              { label: `Wishlist (${wishlistCount})`, onClick: handleWishlist },
              { label: `Carrinho (${cartCount})`, onClick: handleCart },
            ].map(({ label, onClick }) => (
              <li key={label}>
                <button
                  type="button"
                  className="flex items-center gap-2 w-full"
                  onClick={() => { toggleMenu(); onClick(); }}
                  onKeyDown={(e) => handleKey(e, () => { toggleMenu(); onClick(); })}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
);
}
