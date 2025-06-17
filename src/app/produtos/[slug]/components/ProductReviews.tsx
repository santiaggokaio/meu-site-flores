import React from 'react';

interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
}

interface Props {
  reviews: Review[];
}

export default function ProductReviews({ reviews }: Props) {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-semibold uppercase text-textDark">Avaliações</h2>
      <div className="space-y-6">
        {reviews.length === 0 && (
          <p className="text-textDark">Nenhuma avaliação ainda.</p>
        )}
        {reviews.map((rev) => (
          <div key={rev.id} className="border-b border-gray-200 pb-4">
            <p className="mb-1 font-medium text-textDark">
              {rev.author} 
              <span className="ml-2 text-sm text-gray-500">({rev.rating} ⭐)</span>
            </p>
            <p className="leading-relaxed text-textDark">{rev.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
