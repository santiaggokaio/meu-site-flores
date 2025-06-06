'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/utils/formatCurrency';

type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="relative bg-white rounded-card shadow-card overflow-hidden group flex flex-col">
      <a href={`/produtos/${product.slug}`} className="block">
        <div className="w-full h-56 relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Caso queira mostrar badge de desconto, descomente e ajuste o cálculo abaixo */}
          {/*
          <span className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-md">
            –{desconto}% 
          </span>
          */}
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
          <h3 className="text-base font-semibold text-textDark mb-2">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-primary">
            {formatCurrency(product.price)}
          </span>
        </div>
      </a>
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
        aria-label="Adicionar ao carrinho"
        data-testid="adicionar-ao-carrinho"
        className="mt-auto w-full bg-primary text-white uppercase py-2 rounded-button hover:bg-[#C2006D] transition"
      >
        Comprar
      </button>
    </div>
  );
}
