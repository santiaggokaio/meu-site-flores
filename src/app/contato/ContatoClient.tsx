"use client";

import { useState } from "react";

export default function ContatoClient() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          value={form.nome}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">Mensagem</label>
        <textarea
          name="mensagem"
          id="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
          rows={4}
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-pink-600 px-6 py-2 text-white"
      >
        Enviar Mensagem
      </button>
    </form>
  );
}
