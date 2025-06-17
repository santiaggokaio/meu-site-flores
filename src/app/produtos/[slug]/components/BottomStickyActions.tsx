'use client';

import React from 'react';

export default function BottomStickyActions() {
  return (
    <div className="fixed bottom-0 left-0 flex w-full justify-center bg-white p-4 shadow-card md:hidden">
      <button className="w-11/12 rounded-button bg-primary py-3 uppercase text-white transition hover:bg-[#C2006D]">
        Comprar Agora
      </button>
    </div>
  );
}
