'use client';

import React, { useState } from 'react';

interface Faq {
  id: string;
  question: string;
  answer: string;
}

interface Props {
  faqs: ReadonlyArray<Faq>;
}

export default function FAQAccordion({ faqs }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div key={faq.id} className="rounded-card border border-gray-200">
          <button
            className="flex w-full items-center justify-between px-4 py-3 text-left font-medium text-textDark"
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
          >
            <span>{faq.question}</span>
            <span>{openId === faq.id ? '−' : '+'}</span>
          </button>
          {openId === faq.id && (
            <div className="bg-gray-50 px-4 py-3 text-textDark">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
