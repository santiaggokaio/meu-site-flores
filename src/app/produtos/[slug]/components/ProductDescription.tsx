import React from 'react';

interface Props {
  description: string;
}

export default function ProductDescription({ description }: Props) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-2xl font-semibold uppercase text-textDark">Descrição do Produto</h2>
      <p className="leading-relaxed text-textDark">{description}</p>
    </section>
  );
}
