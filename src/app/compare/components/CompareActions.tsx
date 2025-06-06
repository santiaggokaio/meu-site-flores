import React from 'react';
import { useCart } from '@/context/CartContext';
import { useCompare } from '@/context/CompareContext';

type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

type Props = {
  items: Product[];
};

export default function CompareActions({ items }: Props) {
  const { addToCart } = useCart();
  const { clearCompare } = useCompare();

  const handleAddAllToCart = () => {
    items.forEach((item) => {
      // Nosso CartItem exige { id, name, price, quantity, image }
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.imageUrl,
      });
    });
  };

  return (
    <div className="flex gap-4 my-4">
      <button
        onClick={handleAddAllToCart}
        className="bg-green-600 text-white py-2 px-4 rounded"
      >
        Adicionar Todos ao Carrinho
      </button>
      <button
        onClick={clearCompare}
        className="bg-red-600 text-white py-2 px-4 rounded"
      >
        Limpar Comparação
      </button>
    </div>
  );
}
