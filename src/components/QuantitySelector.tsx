'use client';

import React, { useState } from 'react';

interface QuantitySelectorProps {
  initial?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export default function QuantitySelector({
  initial = 1,
  min = 1,
  max,
  onChange,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState<number>(initial);

  const decrement = () => {
    if (quantity > min) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      onChange?.(newQty);
    }
  };

  const increment = () => {
    if (max === undefined || quantity < max) {
      const newQty = quantity + 1;
      setQuantity(newQty);
      onChange?.(newQty);
    }
  };

  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={decrement}
        aria-label="Diminuir quantidade"
        className="flex size-8 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
        disabled={quantity <= min}
      >
        –
      </button>

      <span
        className="mx-3 text-base font-medium"
        aria-live="polite"
        aria-atomic="true"
      >
        {quantity}
      </span>

      <button
        type="button"
        onClick={increment}
        aria-label="Aumentar quantidade"
        className="flex size-8 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
        disabled={max !== undefined && quantity >= max}
      >
        +
      </button>
    </div>
  );
}
