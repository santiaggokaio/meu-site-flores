// dateHelpers.test.ts
import { formatDate } from '@/utils/dateHelpers';

describe('formatDate', () => {
  it('deve formatar uma instância de Date no formato YYYY-MM-DD', () => {
    const date = new Date('2025-06-04T10:20:30Z');
    const result = formatDate(date);
    expect(result).toBe('2025-06-04');
  });
});