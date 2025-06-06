import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductCard, { ProductCardProps } from '../components/ProductCard';

const meta: Meta<ProductCardProps> = {
  title: 'Componentes/ProductCard',
  component: ProductCard,
};

export default meta;

// Como ProductCard espera props, passamos args normalmente:
const Template: StoryFn<ProductCardProps> = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  nome: 'Buquê de Rosas',
  price: 79.9,
  imageUrl: '/imagens/rosas.jpg',
};
