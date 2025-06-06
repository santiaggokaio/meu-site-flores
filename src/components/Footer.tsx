import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Links institucionais */}
        <div>
          <h3 className="text-lg font-semibold text-textDark mb-4">Institucional</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/sobre" className="text-textDark hover:text-primary">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso" className="text-textDark hover:text-primary">
                Termos de Uso
              </Link>
            </li>
            <li>
              <Link href="/politica-privacidade" className="text-textDark hover:text-primary">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold text-textDark mb-4">Contato</h3>
          <ul className="space-y-2 text-textDark text-sm">
            <li>
              <a
                href="mailto:contato@meusiteflores.com"
                className="hover:text-primary"
                aria-label="Enviar e-mail para contato@meusiteflores.com"
              >
                contato@meusiteflores.com
              </a>
            </li>
            <li>
              <a
                href="tel:+5511999999999"
                className="hover:text-primary"
                aria-label="Ligar para (11) 99999-9999"
              >
                (11) 99999-9999
              </a>
            </li>
            <li>Rua das Flores, 123 – São Paulo, SP</li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-lg font-semibold text-textDark mb-4">Siga-nos</h3>
          <ul className="flex gap-4">
            <li>
              <a
                href="https://facebook.com/meusiteflores"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link para Facebook"
                className="text-textDark hover:text-primary"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/meusiteflores"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link para Instagram"
                className="text-textDark hover:text-primary"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Meu Site Flores. Todos os direitos reservados.
      </div>
    </footer>
  );
}
