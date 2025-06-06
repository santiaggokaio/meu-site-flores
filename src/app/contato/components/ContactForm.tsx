'use client';

import React, { useState } from 'react';
import { validateCep } from '@/utils/validateCep';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [cep, setCep] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  function validateEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function validatePhone(phone: string) {
    return /^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(phone);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = 'Nome é obrigatório.';
    if (!validateEmail(email)) newErrors.email = 'E-mail inválido.';
    if (!validatePhone(phone)) newErrors.phone = 'Telefone inválido.';
    if (!validateCep(cep)) newErrors.cep = 'CEP inválido.';
    if (!message.trim()) newErrors.message = 'Mensagem não pode ficar em branco.';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Simular envio
      setSubmitted(true);
      window.location.href = `mailto:suporte@meusiteflores.com?subject=${encodeURIComponent(
        'Contato do site'
      )}&body=${encodeURIComponent(
        `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nCEP: ${cep}\n\nMensagem:\n${message}`
      )}`;
    }
  };

  if (submitted) {
    return <p>Obrigado pela sua mensagem! Entraremos em contato em breve.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors.name && <div role="alert">{errors.name}</div>}
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
        <label htmlFor="message">Mensagem:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        {errors.message && <div role="alert">{errors.message}</div>}
      </div>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
        Enviar
      </button>
    </form>
  );
}
