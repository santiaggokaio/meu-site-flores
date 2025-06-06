import React from 'react';
import TeamSection from './components/TeamSection';
import MissionVision from './components/MissionVision';

export async function generateMetadata() {
  return {
    title: 'Sobre – Meu Site Flores',
    description: 'Saiba mais sobre nossa missão e equipe.',
  };
}

export default function SobrePage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-textDark mb-8 uppercase">Sobre Nós</h1>
      <MissionVision />
      <TeamSection />
    </main>
  );
}
