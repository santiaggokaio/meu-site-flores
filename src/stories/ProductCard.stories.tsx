import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductCard, { ProductCardProps } from '../components/ProductCard';

const meta: Meta<ProductCardProps> = {
  title: 'Componentes/ProductCard',
  component: ProductCard,
};

export default meta;

const Template: StoryFn<ProductCardProps> = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Buquê de Rosas',      // antes nome
  price: 79.9,
  image: '/imagens/rosas.jpg', // antes imageUrl
};
