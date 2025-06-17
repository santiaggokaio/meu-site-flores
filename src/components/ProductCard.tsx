'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/24/outline';
import { Product } from '@/types';
import { formatPrice } from '@/utils/format';
import AddToCartButton from '@/app/produtos/[slug]/components/AddToCartButton';
import { useWishlist, WishlistItem } from '@/context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { items, addToWishlist, removeFromWishlist } = useWishlist();
  const isWishlisted = items.some((item: WishlistItem) => item.id === product.id);

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.image,
      });
    }
  };

  return (
    <div className="relative rounded-lg border p-4 shadow-sm transition hover:shadow-md">
      <button
        onClick={handleWishlistToggle}
        className={`absolute right-2 top-2 rounded-full p-1 ${
          isWishlisted ? 'text-rose-500' : 'text-gray-400'
        }`}
        aria-label="Favoritar"
      >
        <HeartIcon className="size-5" />
      </button>

      <Link href={`/produtos/${product.slug}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="h-60 w-full rounded-md object-cover"
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
  );
}
