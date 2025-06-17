// src/utils/formatCurrency.test.ts

import { formatCurrency } from '@/utils/formatCurrency';

describe('formatCurrency', () => {
  const cases: Array<{ value: number; expected: string }> = [
    { value: 1500, expected: 'R$\u00A01.500,00' },
    { value: 1999.99, expected: 'R$\u00A01.999,99' },
    { value: 0, expected: 'R$\u00A00,00' },
    { value: -250, expected: '-R$\u00A0250,00' },
  ];

  test.each(cases)('formats %# → %s', ({ value, expected }) => {
    expect(formatCurrency(value)).toBe(expected);
  });

  it('throws when input is not a finite number', () => {
    // Casting via unknown para evitar any explícito
    expect(() => formatCurrency('abc' as unknown as number)).toThrow(TypeError);
    expect(() => formatCurrency(NaN)).toThrow(TypeError);
  });
});