import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import ContatoClient from './ContatoClient';

export const metadata: Metadata = {
  title: 'Contato – Meu Site Flores',
  description: 'Entre em contato conosco para dúvidas e informações.',
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <Breadcrumb
        items={[
          { href: '/', label: 'Home' },
          { href: '/contato', label: 'Contato', current: true },
        ]}
      />
      <ContatoClient />
    </main>
  );
}
