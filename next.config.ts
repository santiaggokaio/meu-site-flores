import { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // 1. Ajuste de TypeScript (permite warning de tipos em dev)
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },

  // 2. Configuração de domínios de imagem
  images: {
    domains: [
      'example.com',            // ajuste para seu domínio real
      'cdn.meusiteflores.com',  // CDN para assets de imagens
      'images.unsplash.com',    // exemplo de CDN externa
    ],
  },

  reactStrictMode: true,

  // 3. Define alias '@' para importar de src com '@/'
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    };
    return config;
  },
};

export default nextConfig;