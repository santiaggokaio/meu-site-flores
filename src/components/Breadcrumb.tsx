import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type BreadcrumbItem = {
  href: string;
  label: string;
  current?: boolean;
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="rounded-md bg-white px-4 py-3">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center">
            {/* Separator icon, except before the first item */}
            {idx > 0 && (
              <ChevronRight
                className="size-4 text-gray-400"
                aria-hidden="true"
              />
            )}

            {/* Current page vs link */}
            {item.current ? (
              <span
                className="font-medium text-gray-800"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-gray-800"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
