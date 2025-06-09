import React from 'react'
import { ProductCard } from '@/components/ProductCard'
import { Product } from '@/types'

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
}

const sampleProduct: Product = {
  id: '1',
  slug: 'rosa-magica',
  name: 'Rosa Mágica',
  description: 'Rosas vermelhas em um buquê elegante.',
  price: 99.9,
  image: '/products/rosa-magica.jpg',
  category: 'buques',
  stock: 10,
  rating: 4.5,
}

export const Default = () => <ProductCard product={sampleProduct} />