// src/app/compare/layout.tsx

'use client';

import React from 'react';
import CompareProvider from '@/context/CompareProvider';  // ajuste o import se necessário

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CompareProvider>
      {children}
    </CompareProvider>
  );
}
