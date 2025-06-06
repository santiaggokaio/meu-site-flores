import React from 'react';

export async function generateMetadata() {
  return {
    title: 'Política de Privacidade – Meu Site Flores',
    description: 'Entenda como coletamos e usamos seus dados pessoais.',
  };
}

export default function PoliticaPrivacidadePage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-textDark mb-8 uppercase">
        Política de Privacidade
      </h1>
      <section aria-labelledby="lgpd-title" className="space-y-6 text-textDark text-base leading-relaxed">
        <h2 id="lgpd-title" className="text-2xl font-semibold">LGPD e Consentimento</h2>
        <p>
          Nós coletamos dados pessoais para…
        </p>
        {/* Adicione outras seções relevantes, cada uma começando em <h2 className="text-2xl font-semibold"> */}
      </section>
    </main>
  );
}
