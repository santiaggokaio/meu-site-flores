'use client'

import React, { ComponentType, ReactNode } from 'react'
import dynamic from 'next/dynamic'
import Slider from 'react-slick'

type SliderPropsGeneric = React.ComponentProps<typeof Slider>

// Carregamento dinâmico do componente react-slick, sem SSR
const CarouselComponent = dynamic<SliderPropsGeneric>(
  () => import('react-slick'),
  { ssr: false }
) as ComponentType<SliderPropsGeneric>

interface CarouselProps {
  children: ReactNode
}

export default function Carousel({ children }: CarouselProps) {
  const settings: SliderPropsGeneric = {
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
    nextArrow: (
      <button className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50">
        ›
      </button>
    ),
    prevArrow: (
      <button className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50">
        ‹
      </button>
    ),
    appendDots: (dots: ReactNode) => (
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <ul className="flex gap-2">{dots}</ul>
      </div>
    ),
  }

  return (
    <div className="relative h-auto w-full">
      <CarouselComponent {...settings}>{children}</CarouselComponent>
    </div>
  )
}