// src/app/compare/components/CompareBreadcrumb.tsx

import React from 'react';
import Link from 'next/link';

export default function CompareBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>/</li>
        <li aria-current="page">Comparar</li>
      </ol>
    </nav>
  );
}
