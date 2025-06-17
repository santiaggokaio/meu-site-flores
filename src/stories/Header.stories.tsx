// src/stories/Header.stories.tsx

import React, { Suspense } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Header from '../components/Header';

type HeaderProps = React.ComponentProps<typeof Header>;

const meta: Meta<HeaderProps> = {
  title: 'Componentes/Header',
  component: Header,
};

export default meta;

const Template: StoryFn<HeaderProps> = () => (
  <Suspense fallback={<div>Loading Header…</div>}>
    <Header />
  </Suspense>
);

export const Default = Template.bind({});
