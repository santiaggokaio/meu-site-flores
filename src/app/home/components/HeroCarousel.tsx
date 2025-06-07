'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderStatic from 'react-slick';
import type { ComponentType } from 'react';

// Extrai as props do Slider estático para tipagem correta
type SliderProps = React.ComponentProps<typeof SliderStatic>;

// Carregamento dinâmico do Slider, sem SSR, com tipagem de SliderProps
const Slider = dynamic(
  () => import('react-slick'),
  { ssr: false }
) as ComponentType<SliderProps>;

export default function HeroCarousel() {
  // Configurações do slider tipadas via Partial<SliderProps>
  const settings: Partial<SliderProps> = {
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

  const banners = [
    '/images/banners/banner1.jpg',
    '/images/banners/banner2.jpg',
    // Adicione outros caminhos de banner aqui
  ];

  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      <Slider {...settings}>
        {banners.map((src, idx) => (
          <div key={idx} className="relative w-full h-[400px]">
            <Image
              src={src}
              alt={`Promoção ${idx + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
