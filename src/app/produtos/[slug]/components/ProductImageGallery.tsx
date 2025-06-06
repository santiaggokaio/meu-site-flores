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
      <div className="w-full h-[400px] relative rounded-card overflow-hidden shadow-card">
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
            className={`w-20 h-20 relative rounded-card overflow-hidden border ${
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
