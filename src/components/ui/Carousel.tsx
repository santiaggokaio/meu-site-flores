'use client'

import React, { ComponentType, ReactNode } from 'react'
import dynamic from 'next/dynamic'
import Slider from 'react-slick'

// Carregamento dinâmico do componente react-slick sem SSR
type SliderProps = React.ComponentProps<typeof Slider>
const CarouselComponent = dynamic<SliderProps>(
  () => import('react-slick'),
  { ssr: false }
) as ComponentType<SliderProps>

interface CarouselProps {
  children: ReactNode
}

export default function Carousel({ children }: CarouselProps) {
  const settings: SliderProps = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    // Navegação com acessibilidade aprimorada
    nextArrow: (
      <button
        aria-label="Próximo slide"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <span aria-hidden="true">›</span>
      </button>
    ),
    prevArrow: (
      <button
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <span aria-hidden="true">‹</span>
      </button>
    ),
    appendDots: (dots: ReactNode) => (
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <ul className="flex gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (index: number) => (
      <button
        aria-label={`Ir para slide ${index + 1}`}
        className="size-2 rounded-full bg-white/60 focus:outline-none focus:ring-2 focus:ring-white"
      />
    ),
  }

  return (
    <div role="region" aria-label="Carrossel de imagens" className="relative h-auto w-full">
      <CarouselComponent {...settings}>{children}</CarouselComponent>
    </div>
  )
}
