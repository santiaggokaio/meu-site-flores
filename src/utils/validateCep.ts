// utils/validateCep.ts

/**
 * Verifica se a string passada é um CEP válido no formato "12345678" ou "12345-678".
 */
export function validateCep(cep: string): boolean {
  return /^[0-9]{5}-?[0-9]{3}$/.test(cep);
}
