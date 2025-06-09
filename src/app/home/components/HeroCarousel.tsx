'use client'

import Image from 'next/image'
import Carousel from '@/components/ui/Carousel'

const slides = [
  { id: 1, image: '/banner1.jpg', alt: 'Flores para todas as ocasiões' },
  { id: 2, image: '/banner2.jpg', alt: 'Arranjos delicados e especiais' },
  { id: 3, image: '/banner3.jpg', alt: 'Presentes inesquecíveis' },
]

export default function HeroCarousel() {
  return (
    <Carousel>
      {slides.map(({ id, image, alt }) => (
        <div key={id} className="relative w-full h-64 sm:h-96">
          <Image
            src={image}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-white text-2xl sm:text-4xl font-bold">{alt}</h2>
          </div>
        </div>
      ))}
    </Carousel>
  )
}