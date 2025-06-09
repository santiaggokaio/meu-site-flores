export interface Category {
  slug: string;
  name: string;
  description: string;
}

export const categoriasData: Category[] = [
  { slug: 'dia-dos-namorados', name: 'Dia dos Namorados', description: 'Flores e presentes românticos para surpreender quem você ama.' },
  { slug: 'buques', name: 'Buquês', description: 'Buquês encantadores para todas as ocasiões.' },
  { slug: 'cestas', name: 'Cestas', description: 'Cestas recheadas de carinho e sabor.' },
  { slug: 'promocoes', name: 'Promoções', description: 'Ofertas especiais e produtos com desconto.' },
  { slug: 'orquideas', name: 'Orquídeas', description: 'A elegância das orquídeas para decorar e presentear.' },
  { slug: 'kits', name: 'Kits', description: 'Combinações perfeitas de produtos selecionados.' },
  { slug: 'pascoa', name: 'Páscoa', description: 'Presentes e mimos para celebrar a Páscoa com doçura.' },
]
