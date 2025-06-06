// src/app/contato/components/ContactInfo.tsx

import React from 'react';

export default function ContactInfo() {
  return (
    <div>
      <h2>Informações de Contato</h2>
      <p>
        <strong>Endereço:</strong> Rua das Flores, 123, Centro, São Paulo – SP
      </p>
      <p>
        <strong>Telefone:</strong>{' '}
        <a href="tel:+5511999999999" aria-label="Ligar para (11) 99999-9999">
          (11) 99999-9999
        </a>
      </p>
      <p>
        <strong>E-mail:</strong>{' '}
        <a
          href="mailto:contato@meusiteflores.com"
          aria-label="Enviar e-mail para contato@meusiteflores.com"
        >
          contato@meusiteflores.com
        </a>
      </p>
      <p>
        <strong>Horário de atendimento:</strong> Seg–Sex, 9h às 18h
      </p>
    </div>
  );
}
