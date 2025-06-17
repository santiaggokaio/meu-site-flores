// src/app/sobre/components/TeamSection.tsx

import React from 'react';
import Image from 'next/image';
import teamData from '@/data/team.json'; // ex.: array de { id, name, role, avatarUrl }

export default function TeamSection() {
  if (!teamData || teamData.length === 0) {
    return <p>Nossa equipe será apresentada em breve.</p>;
  }

  return (
    <section aria-label="Nossa equipe">
      <h2>Equipe</h2>
      <div className="grid grid-cols-3 gap-6">
        {teamData.map((member) => (
          <div key={member.id} className="text-center">
            <div className="relative mx-auto size-32">
              <Image
                src={member.avatarUrl}
                alt={`Foto de ${member.name}`}
                fill
                style={{ objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>
            <p className="mt-2 font-semibold">{member.name}</p>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
