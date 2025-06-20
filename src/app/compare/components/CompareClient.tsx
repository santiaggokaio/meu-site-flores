// File: src/app/compare/components/CompareClient.tsx
'use client';

import React from 'react';
import { useCompare } from '@/context/CompareContext';
import CompareBreadcrumb from './CompareBreadcrumb';
import CompareTable from './CompareTable';
import CompareActions from './CompareActions';
import { formatCurrency } from '@/utils/formatCurrency';

export default function CompareClient() {
  const { compare } = useCompare();

  // Para a tabela: transforma cada CompareItem em { id, name, priceFormatted, imageUrl }
  const mappedForTable = compare.map((item) => ({
    id: item.id,
    name: item.name,
    priceFormatted: formatCurrency(item.price),
    imageUrl: item.imageUrl,
  }));

  // Para as ações: CompareActions precisa do shape { id, name, price, imageUrl }
  return (
    <main>
      <CompareBreadcrumb />
      {compare.length === 0 ? (
        <p>Nenhum produto para comparar.</p>
      ) : (
        <>
          <CompareTable items={mappedForTable} />
          <CompareActions items={compare} />
        </>
      )}
    </main>
  );
}
