import React from 'react';
import Link from 'next/link';

export default function EmptyCart() {
  return (
    <div className="py-8 text-center">
      <p>Seu carrinho está vazio.</p>
      <Link href="/produtos">
        <button className="mt-4 rounded bg-green-600 px-4 py-2 text-white">
          Continuar Comprando
        </button>
      </Link>
    </div>
  );
}
