'use client';

import Link from 'next/link';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="mt-12 border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-3">
        {/* Institucional */}
        <div>
          <h4 className="mb-4 font-semibold text-gray-800">Institucional</h4>
          <nav aria-label="Links institucionais">
            <ul className="space-y-2 text-sm text-gray-600">
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
          </nav>
        </div>

        {/* Contato */}
        <div>
          <h4 className="mb-4 font-semibold text-gray-800">Contato</h4>
          <address className="space-y-2 text-sm not-italic text-gray-600">
            <p>
              <a
                href="mailto:contato@meusiteflores.com"
                aria-label="Enviar e-mail para contato"
                className="hover:text-pink-600"
              >
                contato@meusiteflores.com
              </a>
            </p>
            <p>
              <a
                href="tel:+5511952249664"
                aria-label="Ligar para (11) 95224-9664"
                className="hover:text-pink-600"
              >
                (11) 95224-9664
              </a>
            </p>
            <p aria-label="Endereço">Rua das Flores, 123 – São Paulo, SP</p>
          </address>
        </div>

        {/* Siga-nos */}
        <div>
          <h4 className="mb-4 font-semibold text-gray-800">Siga-nos</h4>
          <div className="flex items-center space-x-4 text-gray-600">
            <Link
              href="https://facebook.com/meusiteflores"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-pink-600"
            >
              <Facebook size={24} aria-hidden="true" focusable="false" />
            </Link>
            <Link
              href="https://instagram.com/meusiteflores"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-600"
            >
              <Instagram size={24} aria-hidden="true" focusable="false" />
            </Link>
            <Link
              href="https://wa.me/5511952249664"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-pink-600"
            >
              <MessageCircle size={24} aria-hidden="true" focusable="false" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-4 text-center">
        <p className="text-sm text-gray-500">
          © {currentYear} Meu Site Flores. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
