'use client';

import React from 'react';

export default function BottomStickyActions() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-card flex justify-center md:hidden">
      <button className="w-11/12 bg-primary text-white uppercase py-3 rounded-button hover:bg-[#C2006D] transition">
        Comprar Agora
      </button>
    </div>
  );
}
