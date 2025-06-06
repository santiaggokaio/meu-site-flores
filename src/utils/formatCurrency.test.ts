import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  it('should format number to BRL currency', () => {
    const result = formatCurrency(1500);
    expect(result).toBe('R$ 1.500,00');
  });

  it('should format number with decimal values correctly', () => {
    const result = formatCurrency(1999.99);
    expect(result).toBe('R$ 1.999,99');
  });

  it('should handle zero correctly', () => {
    const result = formatCurrency(0);
    expect(result).toBe('R$ 0,00');
  });

  it('should handle negative numbers', () => {
    const result = formatCurrency(-250);
    expect(result).toBe('-R$ 250,00');
  });

  it('should throw an error if input is not a number', () => {
    // @ts-expect-error Testing invalid input
    expect(() => formatCurrency('abc')).toThrow();
  });
});
