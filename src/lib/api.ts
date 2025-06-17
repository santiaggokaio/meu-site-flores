// src/lib/api.ts
export type Categoria = {
  slug: string;
  name: string;
  imageUrl?: string;
};

export async function getCategorias(): Promise<Categoria[]> {
  return [
    { slug: 'flores', name: 'Flores', imageUrl: '/images/categories/flores.jpg' },
    { slug: 'plantas', name: 'Plantas', imageUrl: '/images/categories/plantas.jpg' },
    // ...outras categorias
  ];
}
