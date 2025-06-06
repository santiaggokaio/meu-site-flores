import React from 'react';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

export async function generateMetadata() {
  return {
    title: 'Contato – Meu Site Flores',
    description: 'Fale conosco para dúvidas, sugestões ou suporte.',
    openGraph: {
      images: ['/images/contact-og.png'], // ex.: imagem de compartilhamento
    },
  };
}

export default function ContatoPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-textDark mb-8 uppercase">Contato</h1>
      <div className="md:flex md:gap-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <ContactInfo />
        </div>
        <div className="md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
