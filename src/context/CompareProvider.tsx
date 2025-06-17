'use client';

import React, {
  createContext,
  useReducer,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
  useContext,
} from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
}

interface CompareState {
  items: Product[];
}

type CompareAction =
  | { type: 'LOAD_COMPARE'; payload: Product[] }
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'CLEAR_ITEMS' };

const LOCAL_STORAGE_KEY = 'compareItems';
const initialState: CompareState = { items: [] };

function compareReducer(
  state: CompareState,
  action: CompareAction
): CompareState {
  switch (action.type) {
    case 'LOAD_COMPARE':
      return { items: action.payload };
    case 'ADD_ITEM': {
      if (state.items.some(item => item.id === action.payload.id)) {
        return state;
      }
      return { items: [...state.items, action.payload] };
    }
    case 'REMOVE_ITEM':
      return { items: state.items.filter(item => item.id !== action.payload.id) };
    case 'CLEAR_ITEMS':
      return { items: [] };
    default:
      throw new Error(`Unhandled action: ${JSON.stringify(action)}`);
  }
}

export interface CompareContextValue {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  clearItems: () => void;
}

const CompareContext = createContext<CompareContextValue | undefined>(undefined);

export default function CompareProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(compareReducer, initialState);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) dispatch({ type: 'LOAD_COMPARE', payload: JSON.parse(stored) });
    } catch (error) {
      /* ignorar erros de leitura do localStorage */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.items));
    } catch (error) {
      /* ignorar erros de escrita no localStorage */
    }
  }, [state.items]);

  const addItem = useCallback((item: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  }, []);

  const removeItem = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  }, []);

  const clearItems = useCallback(() => {
    dispatch({ type: 'CLEAR_ITEMS' });
  }, []);

  const value = useMemo(
    () => ({
      items: state.items,
      addItem,
      removeItem,
      clearItems,
    }),
    [state.items, addItem, removeItem, clearItems]
  );

  return (
    <CompareContext.Provider value={value}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare(): CompareContextValue {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error('useCompare deve ser usado dentro de <CompareProvider>');
  return ctx;
}
