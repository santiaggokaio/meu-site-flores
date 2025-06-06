// app/api/busca/route.ts

import allProducts from '@/data/products.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawQuery = searchParams.get('q') || '';
  const q = rawQuery.trim().toLowerCase();

  // Se não houver termo de busca, retorna array vazio
  if (!q) {
    return new Response(JSON.stringify([]), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const filtered = allProducts.filter((p) => {
    return (
      p.name?.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q) ||
      p.category?.toLowerCase().includes(q)
    );
  });

  return new Response(JSON.stringify(filtered), {
    headers: { 'Content-Type': 'application/json' },
  });
}
