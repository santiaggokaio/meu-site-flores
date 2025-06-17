"use client";

import React, { createContext, useReducer, useEffect, useCallback, useMemo, ReactNode, useContext } from 'react';

export type CompareItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

interface CompareState {
  items: CompareItem[];
}

type CompareAction =
  | { type: 'LOAD_COMPARE'; payload: CompareItem[] }
  | { type: 'ADD_TO_COMPARE'; payload: CompareItem }
  | { type: 'REMOVE_FROM_COMPARE'; payload: { id: string } }
  | { type: 'CLEAR_COMPARE' };

const initialState: CompareState = {
  items: [],
};

function compareReducer(state: CompareState, action: CompareAction): CompareState {
  switch (action.type) {
    case 'LOAD_COMPARE':
      return { items: action.payload };

    case 'ADD_TO_COMPARE': {
      if (state.items.length >= 4) return state;
      if (state.items.some(item => item.id === action.payload.id)) return state;
      return { items: [...state.items, action.payload] };
    }

    case 'REMOVE_FROM_COMPARE':
      return { items: state.items.filter(item => item.id !== action.payload.id) };

    case 'CLEAR_COMPARE':
      return { items: [] };

    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}

export interface CompareContextType {
  compare: CompareItem[];
  addToCompare: (item: CompareItem) => void;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(compareReducer, initialState);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const data = localStorage.getItem('compareItems');
      if (data) {
        const parsed: CompareItem[] = JSON.parse(data);
        dispatch({ type: 'LOAD_COMPARE', payload: parsed });
      }
    } catch {
      // silent fail
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    localStorage.setItem('compareItems', JSON.stringify(state.items));
  }, [state.items]);

  const addToCompare = useCallback((item: CompareItem) => {
    dispatch({ type: 'ADD_TO_COMPARE', payload: item });
  }, []);

  const removeFromCompare = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_FROM_COMPARE', payload: { id } });
  }, []);

  const clearCompare = useCallback(() => {
    dispatch({ type: 'CLEAR_COMPARE' });
  }, []);

  const value = useMemo(() => ({
    compare: state.items,
    addToCompare,
    removeFromCompare,
    clearCompare,
  }), [state.items, addToCompare, removeFromCompare, clearCompare]);

  return (
    <CompareContext.Provider value={value}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = (): CompareContextType => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};