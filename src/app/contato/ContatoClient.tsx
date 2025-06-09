"use client";

import { useState } from 'react';

export default function ContatoClient() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [submitted, setSubmitted] = useState(false);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // await fetch('/api/contato', { method: 'POST', body: JSON.stringify(form) });
  };

  if (submitted) {
    return <p className="text-green-600">Mensagem enviada com sucesso!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* ...seus inputs de nome, email, textarea... */}
      <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded-full">
        Enviar Mensagem
      </button>
    </form>
  );
}
