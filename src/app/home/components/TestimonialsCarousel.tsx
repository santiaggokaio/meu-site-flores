'use client';

import React, { ComponentType } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Slider from 'react-slick';
import testimonials from '../../../data/testimonials';

// Obtemos as props do componente Slider para tipagem
type SliderProps = React.ComponentProps<typeof Slider>;

// Carregamento dinâmico com tipagem correta (sem usar `any`)
const Carousel = dynamic<SliderProps>(
  () => import('react-slick'),
  { ssr: false }
) as ComponentType<SliderProps>;

interface Testimonial {
  id: string;
  avatarUrl: string;
  name: string;
  text: string;
  title: string;
}

export default function TestimonialsCarousel() {
  const depoimentos = testimonials as Testimonial[];

  return (
    <section aria-label="Depoimentos de clientes" className="my-16">
      <h2 className="text-2xl font-semibold text-textDark mb-8 uppercase text-center">
        O que nossos clientes dizem
      </h2>
      <Carousel
        dots={true}
        infinite={true}
        speed={300}
        slidesToShow={3}
        slidesToScroll={1}
        responsive={[
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 640, settings: { slidesToShow: 1 } },
        ]}
        nextArrow={
          <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 z-10">
            ›
          </button>
        }
        prevArrow={
          <button className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 z-10">
            ‹
          </button>
        }
        appendDots={(dots: React.ReactNode) => (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <ul className="flex gap-2">{dots}</ul>
          </div>
        )}
      >
        {depoimentos.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-card shadow-card p-6 mx-2 flex flex-col items-center text-center"
          >
            <Image
              src={t.avatarUrl}
              alt={`Avatar de ${t.name}`}
              width={80}
              height={80}
              className="rounded-full mb-4"
            />
            <p className="text-textDark mb-4 leading-relaxed">
              &quot;{t.text}&quot;
            </p>
            <p className="text-textDark font-semibold">
              {t.name}, <span className="text-gray-500">{t.title}</span>
            </p>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
