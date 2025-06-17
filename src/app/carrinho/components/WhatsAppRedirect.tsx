'use client';

import React from 'react';
import { generateWhatsAppLink } from '@/utils/generateWhatsAppLink';

export default function WhatsAppRedirect() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  if (!whatsappNumber) {
    return <p role="alert">Número de WhatsApp não configurado.</p>;
  }

  const link = generateWhatsAppLink(
    whatsappNumber,
    'Olá, gostaria de finalizar meu pedido.'
  );

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar em contato via WhatsApp"
      className="rounded bg-green-500 px-4 py-2 text-white"
    >
      Finalizar pelo WhatsApp
    </a>
  );
}
