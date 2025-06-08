'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Phone } from 'lucide-react'; // ajuste para 'WhatsApp'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Institucional</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/sobre" className="hover:text-pink-600">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso" className="hover:text-pink-600">
                Termos de Uso
              </Link>
            </li>
            <li>
              <Link href="/politica-privacidade" className="hover:text-pink-600">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Contato</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <a
                href="mailto:contato@meusiteflores.com"
                aria-label="Enviar e-mail"
                className="hover:text-pink-600"
              >
                contato@meusiteflores.com
              </a>
            </li>
            <li>
              <a
                href="tel:+5511952249664"
                aria-label="Ligar para (11) 95224-9664"
                className="hover:text-pink-600"
              >
                (11) 95224-9664
              </a>
            </li>
            <li>Rua das Flores, 123 – São Paulo, SP</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Siga-nos</h4>
          <div className="flex items-center space-x-4 text-gray-600">
            <Link
              href="https://facebook.com/meusiteflores"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-pink-600"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="https://instagram.com/meusiteflores"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-600"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="https://wa.me/5511952249664"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whatsapp"
              className="hover:text-pink-600"
            >
              <Phone size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 text-center py-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Meu Site Flores. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
