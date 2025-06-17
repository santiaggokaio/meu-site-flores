/**
 * Módulo de tipos compartilhados para o projeto "meu-site-flores".
 *
 * Este arquivo centraliza as definições de tipos usados em todo o app,
 * facilitando a manutenção e o autocompletar do editor.
 */

/**
 * Representa um produto no catálogo.
 */
export type Product = {
  /** Identificador único do produto */
  id: string;
  /** Slug da URL amigável */
  slug: string;
  /** Nome completo do produto */
  name: string;
  /** Descrição detalhada do produto */
  description: string;
  /** Preço em centavos (inteiro) */
  price: number;
  /** URL da imagem principal do produto */
  image: string;
  /** Slug da categoria à qual o produto pertence */
  category: string;
  /** Quantidade disponível em estoque */
  stock: number;
  /** Avaliação média de 0 a 5 */
  rating: number;
};

/**
 * Representa uma categoria de produtos.
 */
export type Category = {
  /** Slug da URL amigável da categoria */
  slug: string;
  /** Nome exibido da categoria */
  name: string;
  /** Descrição da categoria */
  description: string;
};

/**
 * Representa um depoimento de cliente.
 */
export type Testimonial = {
  /** Identificador único do depoimento */
  id: string;
  /** Nome do cliente */
  name: string;
  /** Título ou posição do cliente */
  title: string;
  /** Texto do depoimento */
  text: string;
  /** URL do avatar do cliente */
  avatarUrl: string;
};
