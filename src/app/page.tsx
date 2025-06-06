// src/app/page.tsx

import React from 'react';
import HomeClient from './HomeClient';

export async function generateMetadata() {
  return {
    title: 'Meu Site Flores – Home',
    description: 'Encontre os melhores buquês e presentes para todas as ocasiões.',
  };
}

export default function Page() {
  return <HomeClient />;
}
