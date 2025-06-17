// src/data/testimonials.ts
import { StaticImageData } from 'next/image';
import mariaAvatar from '@/public/images/avatars/maria.jpg';
// Importe aqui outros avatares com caminhos absolutos, seguindo o padrão acima

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  avatar: StaticImageData;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Silva',
    title: 'Cliente fiel',
    avatar: mariaAvatar,
    text: 'Amei o serviço! Com certeza voltarei a comprar.',
  },
  // ...outros depoimentos (siga o mesmo formato acima)
];

/**
 * Retorna todos os depoimentos. Roda no servidor sem uso de useEffect.
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}

/**
 * Retorna um depoimento pelo ID, se existir.
 */
export async function getTestimonialById(
  id: string
): Promise<Testimonial | undefined> {
  return testimonials.find((t) => t.id === id);
}

export default getTestimonials;
