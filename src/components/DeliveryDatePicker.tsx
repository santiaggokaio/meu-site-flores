import React, { useState, useEffect } from 'react';

export default function DeliveryDatePicker() {
  const [date, setDate] = useState('');

  useEffect(() => {
    // Exemplo: definir data mínima para amanhã
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const isoDate = tomorrow.toISOString().split('T')[0];
    setDate(isoDate);
  }, []);

  return (
    <div>
      <label htmlFor="delivery-date">Data de Entrega:</label>
      <input
        type="date"
        id="delivery-date"
        name="delivery-date"
        aria-label="Selecione a data de entrega"
        value={date}
        min={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
}
