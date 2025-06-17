// dateHelpers.ts
import { format, parseISO, isValid as isValidDateFn } from 'date-fns';
import { ptBR } from 'date-fns/locale';

/**
 * Converte uma string ISO (YYYY-MM-DD ou ISO completo) ou Date em instância de Date.
 * @param value - Date ou string ISO
 * @throws {Error} se a data for inválida
 */
export function parseDate(value: Date | string): Date {
  const date = typeof value === 'string' ? parseISO(value) : value;
  if (!isValidDateFn(date)) {
    throw new Error(`Invalid date: ${value}`);
  }
  return date;
}

/**
 * Recebe uma Date (ou string ISO) e retorna uma string no formato "YYYY-MM-DD" (ISO date).
 * @param value - Date ou string ISO
 */
export function formatDateISO(value: Date | string): string {
  const date = parseDate(value);
  // yyyy-MM-dd
  return format(date, "yyyy-MM-dd");
}

/**
 * Formata uma Date (ou string ISO) em formato brasileiro legível,
 * ex: "10 de janeiro de 2025".
 * @param value - Date ou string ISO
 */
export function formatDatePTBR(value: Date | string): string {
  const date = parseDate(value);
  return format(date, "d 'de' MMMM 'de' yyyy", { locale: ptBR });
}

/**
 * Verifica se a string ISO (YYYY-MM-DD) é bem-formada e válida.
 * @param iso - string no formato YYYY-MM-DD
 */
export function isValidISODate(iso: string): boolean {
  try {
    const date = parseISO(iso);
    return isValidDateFn(date) && format(date, "yyyy-MM-dd") === iso;
  } catch {
    return false;
  }
}

// Alias para compatibilidade com testes que importam `formatDate`
export const formatDate = formatDateISO;