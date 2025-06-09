'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const banners = [
  { src: '/images/banners/banner1.jpg', alt: 'Banner 1', href: '/' },
  { src: '/images/banners/banner2.jpg', alt: 'Banner 2', href: '/' },
]

export default function HeroBanner() {
  return (
    <section aria-label="Banner Principal" className="relative h-[400px] w-full overflow-hidden">
      <div className="flex h-full">
        {banners.map((b, i) => (
          <Link key={i} href={b.href} className="relative flex-1">
            <Image
              src={b.src}
              alt={b.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority={i === 0}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
