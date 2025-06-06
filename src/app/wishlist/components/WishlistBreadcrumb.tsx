// src/app/wishlist/components/WishlistBreadcrumb.tsx

import React from 'react';
import Link from 'next/link';

export default function WishlistBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>/</li>
        <li aria-current="page">Wishlist</li>
      </ol>
    </nav>
  );
}
