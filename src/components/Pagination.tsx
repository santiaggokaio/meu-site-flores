import React from 'react';

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Paginação de produtos" className="my-8 flex justify-center">
      <ul className="flex gap-2">
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              aria-label={
                page === currentPage
                  ? `Página ${page}, página atual`
                  : `Página ${page}`
              }
              aria-current={page === currentPage ? 'page' : undefined}
              className={`rounded-md px-4 py-2 transition ${
                page === currentPage
                  ? 'bg-primary text-white'
                  : 'border border-gray-300 text-textDark hover:bg-grayLight'
              }`}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
