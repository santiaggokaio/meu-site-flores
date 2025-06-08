export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  text: string;
  avatarUrl: string;
}
