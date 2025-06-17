'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Props {
  images: string[]; // array de URLs de imagem
}

export default function ProductImageGallery({ images }: Props) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="space-y-4">
      {/* Imagem grande */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-card shadow-card">
        <Image
          src={images[selected]}
          alt={`Imagem do produto ${selected + 1}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`relative size-20 overflow-hidden rounded-card border ${
              idx === selected
                ? 'border-primary'
                : 'border-gray-300'
            }`}
          >
            <Image
              src={img}
              alt={`Miniatura ${idx + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
