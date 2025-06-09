'use client'

import React from 'react'
import Image from 'next/image'

const benefits = [
  { src: '/images/trust/trust-delivery.svg', alt: 'Entrega rápida', label: 'Entrega Rápida' },
  { src: '/images/trust/trust-guarantee.svg', alt: 'Garantia de qualidade', label: 'Garantia de Qualidade' },
]

export default function TrustSection() {
  return (
    <section aria-label="Benefícios" className="py-12 bg-gray-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-around items-center gap-6">
        {benefits.map((b, i) => (
          <div key={i} className="flex flex-col items-center">
            <Image src={b.src} alt={b.alt} width={64} height={64} />
            <span className="mt-2 text-gray-700 font-medium">{b.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
