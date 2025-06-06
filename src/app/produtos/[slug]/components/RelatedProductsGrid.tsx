import React from 'react';
import ProductCard from '@/components/ProductCard';

interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
}

interface Props {
  related: Product[];
}

export default function RelatedProductsGrid({ related }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {related.map((prod) => (
        <ProductCard
          key={prod.id}
          id={prod.id}
          slug={prod.slug}
          nome={prod.name}
          price={prod.price}
          imageUrl={prod.image}
        />
      ))}
    </div>
  );
}