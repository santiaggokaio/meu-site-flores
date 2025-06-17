'use client';

import React from 'react';
import { useWishlist, WishlistItem } from '@/context/WishlistContext';
import WishlistBreadcrumb from './WishlistBreadcrumb';
import WishlistTable from './WishlistTable';
import WishlistActions from './WishlistActions';
import { formatCurrency } from '@/utils/formatCurrency';

export default function WishlistClient() {
  const { items } = useWishlist();

  const mapped = items.map((item: WishlistItem) => ({
    id: item.id,
    name: item.name,
    priceFormatted: formatCurrency(item.price),
    imageUrl: item.imageUrl,
  }));

  return (
    <main>
      <WishlistBreadcrumb />
      {mapped.length === 0 ? (
        <p>Nenhum item na lista de desejos.</p>
      ) : (
        <>
          <WishlistTable items={mapped} />
          <WishlistActions items={items} />
        </>
      )}
    </main>
  );
}
