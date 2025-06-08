// Permite importar JSON diretamente
// e reconhecer aliases do tsconfig

declare module '*.json';
declare module '@/*';

// Extensão para adicionar apenas o ícone Whatsapp se necessário
import * as React from 'react';
declare module 'lucide-react' {
  // Tipagem mais específica para componente SVG
  export const Whatsapp: React.FC<React.SVGProps<SVGSVGElement>>;
}
