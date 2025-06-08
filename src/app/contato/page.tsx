// src/app/contato/page.tsx
'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Breadcrumb from '@/components/Breadcrumb';

export async function generateMetadata() {
  return {
    title: 'Contato – Meu Site Flores',
    description: 'Entre em contato conosco para dúvidas e informações.',
  };
}

export default function ContactPage() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você enviaria à sua API ou serviço de e-mail
    console.log('Contato enviado:', form);
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contato – Meu Site Flores</title>
      </Head>
      <main className="container mx-auto px-6 py-12">
        <Breadcrumb
          items={[
            { href: '/', label: 'Home' },
            { href: '/contato', label: 'Contato', current: true },
          ]}
        />

        <h1 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Contato</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nome" className="block font-medium mb-1">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-pink-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-pink-600"
              />
            </div>
            <div>
              <label htmlFor="mensagem" className="block font-medium mb-1">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                value={form.mensagem}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-pink-600"
              />
            </div>
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
            >
              {submitted ? 'Enviado!' : 'Enviar Mensagem'}
            </button>
          </form>

          <div className="space-y-4 text-gray-700">
            <p>
              📍 Rua das Flores, 123 – São Paulo, SP<br />
              📞 (11) 95224-9664<br />
              ✉️ contato@meusiteflores.com
            </p>
            <iframe
              title="Mapa de localização – Rua das Flores, 123"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              aria-label="Mapa de localização"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}
