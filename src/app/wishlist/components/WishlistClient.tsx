'use client';

import React, { useEffect } from 'react';
import { useWishlist } from '@/context/WishlistContext';
import WishlistBreadcrumb from './WishlistBreadcrumb';
import WishlistTable from './WishlistTable';
import WishlistActions from './WishlistActions';
import { formatCurrency } from '@/utils/formatCurrency';

export default function WishlistClient() {
  const { items, loadWishlistFromStorage } = useWishlist();

  useEffect(() => {
    loadWishlistFromStorage();
  }, [loadWishlistFromStorage]);

  // Mapeia WishlistItem → formato que WishlistTable (e suas células) espera: { id, name, priceFormatted, imageUrl }
  const mapped = items.map((item) => ({
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
