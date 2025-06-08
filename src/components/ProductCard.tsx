// src/components/ProductCard.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/utils/formatCurrency';

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  discountPercent?: number;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  discountPercent,
}: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden group flex flex-col">
      <Link href={`/produtos/${id}`} className="block">
        <div className="w-full h-56 relative">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          {discountPercent && (
            <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-md">
              –{discountPercent}%
            </span>
          )}
          <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button aria-label="Adicionar aos favoritos">
              <Image
                src="/assets/icons/heart.svg"
                alt="Wishlist"
                width={20}
                height={20}
              />
            </button>
            <button aria-label="Comparar produto">
              <Image
                src="/assets/icons/compare.svg"
                alt="Compare"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold text-gray-800 mb-2">{name}</h3>
          <div className="flex items-center">
            {discountPercent && (
              <span className="text-sm text-gray-500 line-through mr-2">
                {formatCurrency(price * (1 + discountPercent / 100))}
              </span>
            )}
            <span className="text-lg font-bold text-pink-600">
              {formatCurrency(price)}
            </span>
          </div>
        </div>
      </Link>
      <button
        onClick={() =>
          addToCart({
            id,
            name,
            price,
            quantity: 1,
            image,
          })
        }
        aria-label="Adicionar ao carrinho"
        className="mt-auto w-full bg-pink-600 text-white uppercase py-2 rounded-full hover:bg-pink-700 transition"
      >
        Comprar
      </button>
    </div>
  );
}
