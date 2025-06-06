// src/data/testimonials.ts

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria Silva",
    title: "Cliente fiel",
    avatarUrl: "/images/avatars/maria.jpg",
    text: "Amei o serviço! Com certeza voltarei a comprar."
  },
  // ...outros depoimentos (siga o mesmo formato acima)
];

export default testimonials;
