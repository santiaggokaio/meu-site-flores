export const validateCep = (rawCep: string): boolean => {
  const cep = rawCep.trim();
  return /^[0-9]{5}-?[0-9]{3}$/.test(cep);
};
