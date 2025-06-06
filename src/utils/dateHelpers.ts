// utils/dateHelpers.ts

/**
 * Recebe um objeto Date e retorna uma string no formato "YYYY-MM-DD".
 */
export function formatDate(d: Date): string {
  return d.toISOString().split('T')[0];
}
