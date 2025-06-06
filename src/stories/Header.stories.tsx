import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Header from '../components/Header';

type HeaderProps = React.ComponentProps<typeof Header>;

const meta: Meta<HeaderProps> = {
  title: 'Componentes/Header',
  component: Header,
};

export default meta;

// Como o Header não possui props, Template não precisa de args:
const Template: StoryFn<HeaderProps> = () => <Header />;

export const Default = Template.bind({});
