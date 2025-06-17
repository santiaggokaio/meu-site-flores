import React from 'react';
import Link from 'next/link';

interface Props {
  category: { slug: string; name: string };
}

export default function CategoryBreadcrumb({ category }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
      <ol className="inline-flex list-none p-0">
        <li className="flex items-center">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
        </li>
        <li className="flex items-center">
          <Link href={`/categorias/${category.slug}`} className="hover:text-primary">
            {category.name}
          </Link>
        </li>
      </ol>
    </nav>
  );
}
