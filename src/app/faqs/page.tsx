import React from 'react';
import FAQAccordion from './components/FAQAccordion';
// Se usar alias @ (Opção A):
import faqs from '../../data/faqs';
// Ou, se preferir caminho relativo (Opção B):
// import faqs from '../../data/faqs';

export async function generateMetadata() {
  return {
    title: 'FAQs – Meu Site Flores',
    description: 'Perguntas frequentes sobre nossos produtos e serviços.',
  };
}

export default function FaqsPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-textDark mb-8 uppercase">FAQs</h1>
      <FAQAccordion faqs={faqs} />
    </main>
  );
}
