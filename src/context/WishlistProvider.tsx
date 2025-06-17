'use client';

import React, {
  createContext,
  useContext,
  ReactNode,
  useReducer,
  useEffect,
  useMemo,
  useCallback,
} from 'react';

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface WishlistState { items: WishlistItem[] }

type WishlistAction =
  | { type: 'LOAD_ITEMS'; payload: WishlistItem[] }
  | { type: 'ADD'; payload: WishlistItem }
  | { type: 'REMOVE'; payload: { id: string } }
  | { type: 'CLEAR' };

const LOCAL_STORAGE_KEY = 'wishlistItems';
const initialState: WishlistState = { items: [] };

function reducer(state: WishlistState, action: WishlistAction): WishlistState {
  switch (action.type) {
    case 'LOAD_ITEMS':
      return { items: action.payload };
    case 'ADD':
      if (state.items.some(i => i.id === action.payload.id)) return state;
      return { items: [...state.items, action.payload] };
    case 'REMOVE':
      return { items: state.items.filter(i => i.id !== action.payload.id) };
    case 'CLEAR':
      return { items: [] };
    default:
      throw new Error('Unhandled action');
  }
}

export type WishlistContextType = {
  items: WishlistItem[];
  addToWishlist(item: WishlistItem): void;
  removeFromWishlist(id: string): void;
  clearWishlist(): void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export default function WishlistProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    () => {
      try {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        return stored ? { items: JSON.parse(stored) } : initialState;
      } catch (error) {
        /* ignorar erros de leitura inicial do localStorage */
        return initialState;
      }
    }
  );

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.items));
    } catch (error) {
      /* ignorar erros de escrita no localStorage */
    }
  }, [state.items]);

  const addToWishlist = useCallback(
    (item: WishlistItem) => dispatch({ type: 'ADD', payload: item }),
    []
  );
  const removeFromWishlist = useCallback(
    (id: string) => dispatch({ type: 'REMOVE', payload: { id } }),
    []
  );
  const clearWishlist = useCallback(
    () => dispatch({ type: 'CLEAR' }),
    []
  );

  const value = useMemo(
    () => ({
      items: state.items,
      addToWishlist,
      removeFromWishlist,
      clearWishlist,
    }),
    [state.items, addToWishlist, removeFromWishlist, clearWishlist]
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist(): WishlistContextType {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within <WishlistProvider>');
  return ctx;
}
