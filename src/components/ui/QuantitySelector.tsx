import React, { useState } from 'react';

type Props = {
  initial?: number;
  onChange: (q: number) => void;
};

export default function QuantitySelector({
  initial = 1,
  onChange,
}: Props) {
  const [quantity, setQuantity] = useState(initial);

  const handleChange = (value: number) => {
    if (value < 1) return;
    setQuantity(value);
    onChange(value);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleChange(quantity - 1)}
        aria-label="Diminuir quantidade"
      >
        –
      </button>
      <input
        type="number"
        value={quantity}
        min={1}
        onChange={(e) => handleChange(Number(e.target.value))}
        aria-label="Quantidade"
        className="w-12 text-center"
      />
      <button
        onClick={() => handleChange(quantity + 1)}
        aria-label="Aumentar quantidade"
      >
        +
      </button>
    </div>
  );
}
