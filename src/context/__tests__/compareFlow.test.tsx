/* eslint-env jest */
import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { CompareProvider, useCompare } from '@/context/CompareContext';

describe('CompareContext', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <CompareProvider>{children}</CompareProvider>
  );

  it('should add a product to comparison', () => {
    const { result } = renderHook(() => useCompare(), { wrapper });

    act(() => {
      result.current.addToCompare({
        id: '1',
        name: 'Orquídea',
        price: 49.9,
        imageUrl: '/flowers/orquidea.jpg',
      });
    });

    expect(result.current.compare).toHaveLength(1);
    expect(result.current.compare[0].name).toBe('Orquídea');
  });

  it('should remove a product from comparison', () => {
    const { result } = renderHook(() => useCompare(), { wrapper });

    act(() => {
      result.current.addToCompare({
        id: '1',
        name: 'Orquídea',
        price: 49.9,
        imageUrl: '/flowers/orquidea.jpg',
      });
    });
    expect(result.current.compare).toHaveLength(1);

    act(() => {
      result.current.removeFromCompare('1');
    });
    expect(result.current.compare).toHaveLength(0);
  });
});
