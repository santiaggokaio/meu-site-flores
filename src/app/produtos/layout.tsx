// src/app/produtos/layout.tsx

"use client";

import React, { ReactNode } from 'react';

export default function ProdutosLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
