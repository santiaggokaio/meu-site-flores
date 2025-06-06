import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" aria-label="Logotipo Meu Site Flores">
          <Image
            src="/images/logo.png"
            alt="Logotipo Meu Site Flores"
            width={150}
            height={50}
          />
        </Link>

        {/* Navegação principal */}
        <nav aria-label="Menu principal">
          <ul className="flex gap-8 text-textDark font-medium">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li className="relative group">
              <Link href="/produtos" className="hover:text-primary">
                Produtos
              </Link>
              {/* Exemplo de dropdown em “Produtos” */}
              <ul className="absolute left-0 top-full mt-2 hidden bg-white shadow-xl rounded-card group-hover:block">
                <li>
                  <Link
                    href="/categorias/buques"
                    className="block px-4 py-2 hover:bg-grayLight"
                  >
                    Buquês
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categorias/cestas"
                    className="block px-4 py-2 hover:bg-grayLight"
                  >
                    Cestas
                  </Link>
                </li>
                {/* Adicione as demais categorias aqui */}
              </ul>
            </li>
            <li>
              <Link href="/categorias/buques" className="hover:text-primary">
                Categorias
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-primary">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:text-primary">
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
