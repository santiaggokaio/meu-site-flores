import React from 'react';
import ProductCard from './ProductCard';

type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
};

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section aria-label="Lista de produtos">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={{
              id: p.id,
              slug: p.slug,
              name: p.name,
              price: p.price,
              image: p.image,
            }}
          />
        ))}
      </div>
    </section>
  );
}
