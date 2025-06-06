// src/app/compare/page.tsx

import React from 'react';
import CompareClient from './components/CompareClient';

export async function generateMetadata() {
  return {
    title: 'Compare Produtos – Meu Site Flores',
    description: 'Compare produtos lado a lado e escolha o melhor.',
  };
}

export default function ComparePage() {
  return <CompareClient />;
}
