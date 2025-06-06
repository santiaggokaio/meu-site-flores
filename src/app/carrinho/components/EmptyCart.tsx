import React from 'react';
import Link from 'next/link';

export default function EmptyCart() {
  return (
    <div className="text-center py-8">
      <p>Seu carrinho está vazio.</p>
      <Link href="/produtos">
        <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded">
          Continuar Comprando
        </button>
      </Link>
    </div>
  );
}
