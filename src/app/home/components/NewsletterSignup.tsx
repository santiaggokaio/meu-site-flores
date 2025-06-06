import React, { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function validateEmail(email: string) {
    // regex simples
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }
    setError('');
    // enviar ao servidor ou simular
    alert('Obrigado por se inscrever!');
  };

  return (
    <section aria-label="Inscreva-se na Newsletter" className="my-16 bg-grayLight py-12">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-2xl font-semibold text-textDark mb-4 uppercase">
          Receba nossas novidades
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 max-w-md mx-auto"
        >
          <input
            type="email"
            name="email"
            aria-label="E-mail"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-secondary text-white uppercase tracking-wide rounded-r-md hover:bg-[#5DB87A] transition"
          >
            Inscrever
          </button>
        </form>
        {error && (
          <div role="alert" className="mt-4 text-sm text-red-500">
            {error}
          </div>
        )}
      </div>
    </section>
  );
}
