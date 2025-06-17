// src/app/home/components/NewsletterSignup.tsx

'use client';

import React, { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // lógica de envio aqui...
    setSubscribed(true);
  };

  return (
    <section className="bg-pink-50 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-4 text-2xl font-bold uppercase text-gray-800">
          Inscreva-se e ganhe 10% de desconto
        </h2>
        {!subscribed ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu e-mail"
              className="w-full max-w-md rounded-full border border-gray-300 px-4 py-2"
              required
            />
            <button
              type="submit"
              className="rounded-full bg-pink-600 px-6 py-2 font-semibold text-white transition hover:bg-pink-700"
            >
              Inscrever
            </button>
          </form>
        ) : (
          <p className="font-semibold text-green-600">
            Obrigado por se inscrever!
          </p>
        )}
      </div>
    </section>
  );
}
