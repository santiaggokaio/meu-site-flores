// src/app/carrinho/page.tsx

import React from 'react';
import CarrinhoClient from './components/CarrinhoClient';

export async function generateMetadata() {
  return {
    title: 'Seu Carrinho – Meu Site Flores',
    description: 'Revise seus itens e finalize sua compra.',
  };
}

export default function CarrinhoPage() {
  return <CarrinhoClient />;
}
