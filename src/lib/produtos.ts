// lib/produtos.ts

import productMocks from '@/data/productMocks.json';

export interface ProductRaw {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
  // Se houver mais campos, adicione-os aqui
}

/**
 * Retorna todos os produtos cuja propriedade `category` seja igual ao slug informado.
 */
export function getProdutosPorCategoria(slug: string): ProductRaw[] {
  const mocks = productMocks as ProductRaw[];
  return mocks.filter((prod) => prod.category === slug);
}
