'use client';

import React, { useState } from 'react';

interface Faq {
  id: string;
  question: string;
  answer: string;
}

interface Props {
  faqs: Faq[];
}

export default function FAQAccordion({ faqs }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div key={faq.id} className="border border-gray-200 rounded-card">
          <button
            className="w-full px-4 py-3 text-left text-textDark font-medium flex justify-between items-center"
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
          >
            <span>{faq.question}</span>
            <span>{openId === faq.id ? '−' : '+'}</span>
          </button>
          {openId === faq.id && (
            <div className="px-4 py-3 bg-gray-50 text-textDark">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
