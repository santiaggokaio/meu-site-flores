'use client';

import React from 'react';
import { useCompare } from '@/context/CompareContext';

type Props = {
  productId: string;
};

export default function RemoveFromCompareButton({ productId }: Props) {
  const { removeFromCompare } = useCompare();

  return (
    <button
      onClick={() => removeFromCompare(productId)}
      aria-label="Remover da comparação"
      className="text-red-600"
    >
      🗑️
    </button>
  );
}
