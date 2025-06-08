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
    <section className="py-12 bg-pink-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase">
          Inscreva-se e ganhe 10% de desconto
        </h2>
        {!subscribed ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu e-mail"
              className="px-4 py-2 rounded-full border border-gray-300 w-full max-w-md"
              required
            />
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition"
            >
              Inscrever
            </button>
          </form>
        ) : (
          <p className="text-green-600 font-semibold">
            Obrigado por se inscrever!
          </p>
        )}
      </div>
    </section>
  );
}
