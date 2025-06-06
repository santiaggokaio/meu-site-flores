// src/utils/dateHelpers.test.ts
import { formatDate } from './dateHelpers';

describe('formatDate', () => {
  it('deve retornar YYYY-MM-DD a partir de uma Date', () => {
    const date = new Date('2025-06-04T10:20:30Z');
    expect(formatDate(date)).toBe('2025-06-04');
  });
});
