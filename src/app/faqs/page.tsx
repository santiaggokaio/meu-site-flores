// src/app/faqs/page.tsx
import React from 'react';
import FAQAccordion from './components/FAQAccordion';
import { getFaqs } from '../../data/faqs';

export async function generateMetadata() {
  return {
    title: 'FAQs – Meu Site Flores',
    description: 'Perguntas frequentes sobre nossos produtos e serviços.',
  };
}

export default async function FaqsPage() {
  // Busca o array (imutável) de FAQs
  const faqsList = await getFaqs();

  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="mb-8 text-3xl font-semibold uppercase text-textDark">FAQs</h1>
      {/* Passa o array de FAQs para o componente de acordeão */}
      <FAQAccordion faqs={faqsList} />
    </main>
  );
}
