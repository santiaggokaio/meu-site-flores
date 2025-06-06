'use client';

import React, { ComponentType } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Slider from 'react-slick';

export type Slide = {
  id: string;
  imageUrl: string;
  caption?: string;
};

type CarouselProps = {
  slides: Slide[];
};

// Obtemos as props do componente Slider para tipagem
type SliderPropsGeneric = React.ComponentProps<typeof Slider>;

// Carregamento dinâmico com tipagem correta (sem usar `any`)
const CarouselComponent = dynamic<SliderPropsGeneric>(
  () => import('react-slick'),
  { ssr: false }
) as ComponentType<SliderPropsGeneric>;

export default function Carousel({ slides }: CarouselProps) {
  const settings: SliderPropsGeneric = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
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
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <ul className="flex gap-2">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="relative w-full h-auto">
      <CarouselComponent {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-64 md:h-80">
            <Image
              src={slide.imageUrl}
              alt={slide.caption || 'Slide'}
              fill
              className="object-cover"
            />
            {slide.caption && (
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
                {slide.caption}
              </div>
            )}
          </div>
        ))}
      </CarouselComponent>
    </div>
  );
}
