'use client';

import React, { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import EmptyCart from './EmptyCart';
import { formatCurrency } from '@/utils/formatCurrency';

export default function CarrinhoClient() {
  const { cart } = useCart();
  const [subtotal, setSubtotal] = useState(0);

  // Recalcula subtotal sempre que cart mudar
  useEffect(() => {
    if (cart.length === 0) {
      setSubtotal(0);
      return;
    }
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubtotal(total);
  }, [cart]);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="p-6 md:flex md:gap-8">
      {/* Lista de itens */}
      <div className="flex-1">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            product={{
              id: item.id,
              name: item.name,
              priceFormatted: formatCurrency(item.price),
              imageUrl: item.image,
            }}
            quantity={item.quantity}
          />
        ))}
      </div>

      {/* Resumo do pedido */}
      <CartSummary subtotal={subtotal} />
    </div>
  );
}
