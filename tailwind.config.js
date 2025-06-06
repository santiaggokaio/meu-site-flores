/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E6007E',      // rosa-forte exato do Flores Larissa
        secondary: '#6FCF97',    // verde-água/pastel
        grayLight: '#F2F2F2',    // cinza-claro para fundos de seção
        textDark: '#333333',     // antracite para títulos/textos
        white: '#FFFFFF'         // fundo branco
      },
      borderRadius: {
        card: '8px',             // arredondamento de cards e elementos
        button: '12px'           // cantos dos botões
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.1)'  // sombra suave de produto
      }
    },
    fontFamily: {
      sans: ['Poppins', 'Roboto', 'sans-serif'],  // garantir Poppins (400/700) e Roboto
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
