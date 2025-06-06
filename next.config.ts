// next.config.ts

import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 1. Ajuste de TypeScript (permite warning de tipos em dev)
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },

  // 2. Configuração de domínios de imagem
  images: {
    domains: [
      'example.com',            // ajuste para seu domínio real
      'cdn.meusiteflores.com',  
      'images.unsplash.com',
    ],
  },

  // (opcional) outras configurações já existentes...
  reactStrictMode: true,

  // → Removida a linha: swcMinify: true,
};

export default nextConfig;
