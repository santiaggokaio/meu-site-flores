import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      {/* Imagem de fundo */}
      <Image
        src="/images/banner-flores.jpg"
        alt="Banner flores decorativas"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          As flores perfeitas para qualquer ocasião
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow-md">
          Buquês, cestas e arranjos encantadores com entrega rápida
        </p>
        <Link
          href="/produtos"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-base font-semibold shadow-md transition-all"
        >
          Ver Produtos
        </Link>
      </div>
    </section>
  );
}
