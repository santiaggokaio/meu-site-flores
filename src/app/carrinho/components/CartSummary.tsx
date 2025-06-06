'use client';

import React from 'react';
import { formatCurrency } from '@/utils/formatCurrency';
import { useCart } from '@/context/CartContext';

type CartSummaryProps = {
  subtotal: number;
};

export default function CartSummary({ subtotal }: CartSummaryProps) {
  const { cart, clearCart } = useCart();

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart }),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar sessão de checkout');
      }

      const data = await response.json();
      console.log('Sessão criada:', data.id);
      // Opcional: redirecionar para data.url (caso venha retornado)
      // window.location.href = data.url;
      clearCart();
    } catch (err) {
      console.error('Erro no checkout:', err);
    }
  };

  return (
    <aside className="border p-4 rounded-md w-full md:w-1/3">
      <h2 className="text-xl font-semibold mb-2">Resumo do Pedido</h2>
      <p>
        Subtotal: <span>{formatCurrency(subtotal)}</span>
      </p>
      <button
        onClick={handleCheckout}
        className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Prosseguir para Pagamento
      </button>
    </aside>
  );
}
