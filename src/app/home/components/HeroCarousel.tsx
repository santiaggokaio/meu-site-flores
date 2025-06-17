// HeroCarousel.tsx

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
        <div key={id} className="relative h-64 w-full sm:h-96">
          <Image
            src={image}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <h2 className="text-2xl font-bold text-white sm:text-4xl">{alt}</h2>
          </div>
        </div>
      ))}
    </Carousel>
  )
}
