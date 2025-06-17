// src/utils/formatCurrency.ts

/* Constantes de localização e moeda (BRL) */
const LOCALE = 'pt-BR';
const CURRENCY = 'BRL';

// Instância única de Intl.NumberFormat para otimizar formatações repetidas
const currencyFormatter = new Intl.NumberFormat(LOCALE, {
  style: 'currency',
  currency: CURRENCY,
});

/**
 * Formata um número para o padrão de moeda brasileira (BRL).
 *
 * @param valor - Valor numérico a ser formatado.
 * @returns Retorna a string formatada em BRL, ex: "R$ 1.500,00".
 * @throws {TypeError} Quando o valor não é um número finito.
 */
export function formatCurrency(valor: number): string {
  if (!Number.isFinite(valor)) {
    throw new TypeError(`formatCurrency: valor inválido (${valor})`);
  }

  return currencyFormatter.format(valor);
}
