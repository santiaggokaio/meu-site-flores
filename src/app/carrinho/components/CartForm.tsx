'use client';

import React, { useState } from 'react';
import { validateCep } from '@/utils/validateCep';

export default function CartForm() {
  const [cep, setCep] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function validateEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function validatePhone(phone: string) {
    return /^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(phone);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!validateCep(cep)) newErrors.cep = 'CEP inválido (apenas números, 8 dígitos).';
    if (!validateEmail(email)) newErrors.email = 'E-mail inválido.';
    if (!validatePhone(phone)) newErrors.phone = 'Telefone inválido (ex.: (11) 91234-5678).';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Submissão real ou simulação
      alert('Pedido enviado (simulação)');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cep">CEP:</label>
        <input
          id="cep"
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          required
        />
        {errors.cep && <div role="alert">{errors.cep}</div>}
      </div>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <div role="alert">{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="phone">Telefone:</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        {errors.phone && <div role="alert">{errors.phone}</div>}
      </div>
      <button type="submit" disabled={Object.keys(errors).length > 0}>
        Finalizar Pedido
      </button>
    </form>
  );
}
