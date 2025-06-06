// data/categorias.ts

export interface Categoria {
  slug: string;
  name: string;
  description: string;
}

const categorias: Categoria[] = [
  { slug: 'buques', name: 'Buquês', description: 'Buquês de flores variadas.' },
  { slug: 'cestas', name: 'Cestas', description: 'Cestas florais para presentes.' },
  { slug: 'orquideas', name: 'Orquídeas', description: 'Orquídeas em vaso.' },
  // Adicione outras categorias conforme necessário
];

export default categorias;
