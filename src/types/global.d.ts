// global.d.ts - Declarações de módulos e tipos globais

// Permite importar JSON diretamente
declare module '*.json';

// Permite o uso de CSS Modules (*.module.css, *.module.scss)
declare module '*.module.css';
declare module '*.module.scss';

// Permite importar imagens como módulos
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';

// Para SVGs, suporta importação como ReactComponent e como caminho default
declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// Reconhece alias de caminho absoluto conforme tsconfig (ex: @/components/...)
declare module '@/*';

// Tipagem específica para o ícone Whatsapp do pacote lucide-react
import type { FC, SVGProps } from 'react';
declare module 'lucide-react' {
  export const Whatsapp: FC<SVGProps<SVGSVGElement>>;
}