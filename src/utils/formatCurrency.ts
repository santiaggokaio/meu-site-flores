// utils/formatCurrency.ts

/**
 * Converte um número em string no formato BRL (por exemplo, 1500 → "R$ 1.500,00").
 * Lança erro se o valor não for um número válido.
 */
export function formatCurrency(valor: number): string {
  if (typeof valor !== 'number' || Number.isNaN(valor)) {
    throw new Error('formatCurrency: valor deve ser um número válido');
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}
