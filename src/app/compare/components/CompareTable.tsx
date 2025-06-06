import React from 'react';
import Image from 'next/image';

type BaseProduct = {
  id: string;
  name: string;
  priceFormatted: string;
  imageUrl: string;
};

// Permite atributos adicionais (ex.: tamanho, cor etc.), mas só como string ou number
type Product = BaseProduct & Record<string, string | number>;

type Props = {
  items: Product[];
};

export default function CompareTable({ items }: Props) {
  if (!items.length) return null;

  // Obtém todas as keys únicas para colunas dinâmicas
  const columns = Array.from(
    items.reduce<Set<string>>((acc, item) => {
      Object.keys(item).forEach((k) => acc.add(k));
      return acc;
    }, new Set())
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} className="border p-2 text-left">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              {columns.map((col) => (
                <td key={col} className="border p-2">
                  {col === 'imageUrl' ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={80}
                      height={80}
                    />
                  ) : col === 'priceFormatted' ? (
                    item.priceFormatted
                  ) : (
                    // Força string(), pois agora item[col] é string | number
                    (item as Record<string, string | number>)[col]?.toString() || '-'
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
