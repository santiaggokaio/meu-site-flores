import React from 'react';

interface Props {
  description: string;
}

export default function ProductDescription({ description }: Props) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-textDark mb-4 uppercase">Descrição do Produto</h2>
      <p className="text-textDark leading-relaxed">{description}</p>
    </section>
  );
}
