import React from 'react';

export async function generateMetadata() {
  return {
    title: 'Termos de Uso – Meu Site Flores',
    description: 'Leia os termos de uso para utilizar nossa plataforma.',
  };
}

export default function TermosDeUsoPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <section aria-labelledby="termos-title">
        <h1 id="termos-title" className="mb-8 text-3xl font-semibold uppercase text-textDark">
          Termos de Uso
        </h1>
        <div className="space-y-6 text-base leading-relaxed text-textDark">
          <p>
            Bem-vindo ao Meu Site Flores. Ao utilizar este site, você concorda
            com os seguintes termos...
          </p>
          {/* Continue com outras seções em <h2 className="text-xl font-semibold ..."> */}
        </div>
      </section>
    </main>
  );
}
