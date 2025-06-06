import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/utils/formatCurrency';

export interface ProductCardProps {
  id: string;
  slug: string;
  nome: string;
  price: number;
  imageUrl: string;
  discountPercent?: number;
}

export default function ProductCard({
  id,
  slug,
  nome,
  price,
  imageUrl,
  discountPercent,
}: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="relative bg-white rounded-card shadow-card overflow-hidden group flex flex-col">
      <a href={`/produtos/${slug}`} className="block">
        <div className="w-full h-56 relative">
          <Image
            src={imageUrl}
            alt={nome}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {discountPercent && (
            <span className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-md">
              –{discountPercent}%
            </span>
          )}
          <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button>
              <Image
                src="/assets/icons/heart.svg"
                alt="Wishlist"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </button>
            <button>
              <Image
                src="/assets/icons/compare.svg"
                alt="Compare"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold text-textDark mb-2">{nome}</h3>
          <div className="flex items-center">
            {discountPercent && (
              <span className="text-sm text-gray-500 line-through mr-2">
                {formatCurrency(price * (1 + discountPercent / 100))}
              </span>
            )}
            <span className="text-lg font-bold text-primary">
              {formatCurrency(price)}
            </span>
          </div>
        </div>
      </a>
      <button
        onClick={() =>
          addToCart({
            id,
            name: nome,
            price,
            quantity: 1,
            image: imageUrl,
          })
        }
        aria-label="Adicionar ao carrinho"
        className="mt-auto w-full bg-primary text-white uppercase py-2 rounded-button hover:bg-[#C2006D] transition"
      >
        Comprar
      </button>
    </div>
  );
}
