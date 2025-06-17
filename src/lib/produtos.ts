// src/lib/produtos.ts
import productMocks from '@/data/productMocks.json';

// Interface que descreve o formato bruto do JSON de produtos
interface ProductJson {
  id: string | number;
  slug?: string;
  title?: string;
  description?: string;
  category?: {
    slug?: string;
    name?: string;
  };
  price?: {
    value?: number | string;
    currency?: string;
    formatted?: string;
  };
  compareAtPrice?: number | string | null;
  images?: Array<{ url?: string; alt?: string }>;
  stock?: number | string;
  rating?: number | string;
  available?: boolean | string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProductRaw {
  id: string;
  slug: string;
  title: string;
  description: string;
  // Categoria: mantém objeto ou apenas slug/nome? Aqui usamos slug.
  categorySlug: string;
  categoryName: string;
  priceValue: number;
  priceCurrency: string;
  priceFormatted: string;
  compareAtPrice: number | null;
  // URL da primeira imagem
  imageUrl: string;
  imageAlt: string;
  stock: number;
  rating: number;
  available: boolean;
  createdAt: string; // ou Date, se preferir converter
  updatedAt: string;
}

/**
 * Retorna produtos filtrados por categoria (slug).
 * Mapeia o objeto do JSON para ProductRaw.
 */
export function getProdutosPorCategoria(slug: string): ProductRaw[] {
  // Agora tipamos corretamente o array de mocks
  const rawArray = productMocks as ProductJson[];

  return rawArray
    .filter(item => {
      // Verifica se há category.slug e compara ignorando caixa
      const cat = item.category;
      return (
        cat &&
        typeof cat.slug === 'string' &&
        cat.slug.toLowerCase() === slug.toLowerCase()
      );
    })
    .map(item => {
      // Extrai campos com segurança
      const category = item.category ?? {};
      // Imagem: pega o primeiro elemento de images[], se existir
      const firstImage = Array.isArray(item.images) && item.images.length > 0
        ? item.images[0]
        : { url: '', alt: '' };

      return {
        id: String(item.id),
        slug: String(item.slug ?? ''),
        title: String(item.title ?? ''),
        description: String(item.description ?? ''),
        categorySlug: String(category.slug ?? ''),
        categoryName: String(category.name ?? ''),
        priceValue:
          typeof item.price?.value === 'number'
            ? item.price.value
            : parseFloat(String(item.price?.value)) || 0,
        priceCurrency: String(item.price?.currency ?? ''),
        priceFormatted: String(item.price?.formatted ?? ''),
        compareAtPrice:
          item.compareAtPrice === null
            ? null
            : typeof item.compareAtPrice === 'number'
            ? item.compareAtPrice
            : parseFloat(String(item.compareAtPrice)) || null,
        imageUrl: String(firstImage.url ?? ''),
        imageAlt: String(firstImage.alt ?? ''),
        stock:
          typeof item.stock === 'number'
            ? item.stock
            : parseInt(String(item.stock), 10) || 0,
        rating:
          typeof item.rating === 'number'
            ? item.rating
            : parseFloat(String(item.rating)) || 0,
        available: Boolean(item.available),
        createdAt: String(item.createdAt ?? ''),
        updatedAt: String(item.updatedAt ?? ''),
      };
    });
}
