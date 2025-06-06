import React from 'react';
import Image from 'next/image';

 type Props = {
   title: string;
   subtitle?: string;
   backgroundUrl: string;
 };

export default function Hero({ title, subtitle, backgroundUrl }: Props) {
   return (
     <section
       className="relative w-full h-96 text-white flex items-center justify-center"
       aria-label="Seção principal"
     >
       <Image
         src={backgroundUrl}
         alt="Imagem de fundo do banner"
         fill
         style={{ objectFit: 'cover' }}
       />
       <div className="absolute z-10 text-center">
         <h1 className="text-4xl font-bold">{title}</h1>
         {subtitle && <p className="mt-2 text-xl">{subtitle}</p>}
       </div>
       {/* Camada semitransparente para contraste */}
       <div className="absolute inset-0 bg-black opacity-40"></div>
     </section>
   );
 }
