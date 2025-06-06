'use client';

import React, { ComponentType } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Carregamento dinâmico do Slider, desabilitando SSR
const Slider = dynamic(() => import('react-slick'), { ssr: false }) as ComponentType<any>;

export default function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <ul className="flex gap-2">{dots}</ul>
      </div>
    ),
    nextArrow: (
      <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 z-10">
        ›
      </button>
    ),
    prevArrow: (
      <button className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 z-10">
        ‹
      </button>
    ),
  };

  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      <Slider {...settings}>
        {/* Exemplos de slides; substitua pelos seus banners reais */}
        <div className="relative w-full h-[400px]">
          <Image
            src="/images/banners/banner1.jpg"
            alt="Promoção 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-[400px]">
          <Image
            src="/images/banners/banner2.jpg"
            alt="Promoção 2"
            fill
            className="object-cover"
          />
        </div>
        {/* Adicione quantos slides precisar */}
      </Slider>
    </section>
  );
}
