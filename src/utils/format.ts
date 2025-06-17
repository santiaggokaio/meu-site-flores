/**
 * formata um valor numérico ou string para moeda BRL (pt-BR).
 *
 * @param value - número ou string representando o valor a ser formatado
 * @returns string formatada no padrão "R$ 1.234,56"
 */
export function formatPrice(value: number | string): string {
  // converte strings (por ex. "1234.56") para número
  const amount =
    typeof value === 'string'
      ? parseFloat(value.replace(/\s+/g, ''))
      : value

  // trata valores inválidos (NaN, null, undefined)
  if (isNaN(amount) || amount == null) {
    // caso a loja queira exibir vazio, retorne ''
    return 'R$ 0,00'
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount)
}