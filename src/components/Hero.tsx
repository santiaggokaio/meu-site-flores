import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden">
      {/* Imagem de fundo */}
      <Image
        src="/images/banner-flores.jpg"
        alt="Banner flores decorativas"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 px-6 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold drop-shadow-lg md:text-5xl">
          As flores perfeitas para qualquer ocasião
        </h1>
        <p className="mb-6 text-lg drop-shadow-md md:text-xl">
          Buquês, cestas e arranjos encantadores com entrega rápida
        </p>
        <Link
          href="/produtos"
          className="inline-block rounded-full bg-pink-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-pink-700"
        >
          Ver Produtos
        </Link>
      </div>
    </section>
  );
}
