'use client';

import React from 'react';

export default function TrustBadges() {
  return (
    <section aria-label="Trust Badges" className="my-4 flex gap-4">
      <span className="bg-gray-200 px-3 py-1 rounded">PagSeguro</span>
      <span className="bg-gray-200 px-3 py-1 rounded">Mercado Pago</span>
      <span className="bg-gray-200 px-3 py-1 rounded">WhatsApp</span>
    </section>
  );
}
