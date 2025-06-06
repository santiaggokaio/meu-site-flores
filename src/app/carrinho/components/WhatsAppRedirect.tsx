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
      className="bg-green-500 text-white py-2 px-4 rounded"
    >
      Finalizar pelo WhatsApp
    </a>
  );
}
