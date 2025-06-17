'use client';

import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  ReactNode,
} from 'react';

export type WishlistItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

type WishlistState = {
  items: WishlistItem[];
};

type WishlistAction =
  | { type: 'LOAD_WISHLIST'; payload: WishlistItem[] }
  | { type: 'ADD_TO_WISHLIST'; payload: WishlistItem }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: { id: string } }
  | { type: 'CLEAR_WISHLIST' };

const initialState: WishlistState = { items: [] };

function wishlistReducer(
  state: WishlistState,
  action: WishlistAction
): WishlistState {
  switch (action.type) {
    case 'LOAD_WISHLIST':
      return { items: action.payload };
    case 'ADD_TO_WISHLIST': {
      const exists = state.items.some((i) => i.id === action.payload.id);
      if (exists) return state;
      return { items: [...state.items, action.payload] };
    }
    case 'REMOVE_FROM_WISHLIST':
      return {
        items: state.items.filter((i) => i.id !== action.payload.id),
      };
    case 'CLEAR_WISHLIST':
      return { items: [] };
    default:
      throw new Error(`Unhandled action`);
  }
}

export type WishlistContextType = {
  items: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  clearWishlist: () => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('wishlistItems');
      if (stored) {
        dispatch({
          type: 'LOAD_WISHLIST',
          payload: JSON.parse(stored),
        });
      }
    } catch (error) {
      /* ignorar erros de leitura do localStorage */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        'wishlistItems',
        JSON.stringify(state.items)
      );
    } catch (error) {
      /* ignorar erros de escrita no localStorage */
    }
  }, [state.items]);

  const addToWishlist = (item: WishlistItem) =>
    dispatch({ type: 'ADD_TO_WISHLIST', payload: item });
  const removeFromWishlist = (id: string) =>
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: { id } });
  const clearWishlist = () => dispatch({ type: 'CLEAR_WISHLIST' });

  return (
    <WishlistContext.Provider
      value={{ items: state.items, addToWishlist, removeFromWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlistContext(): WishlistContextType {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlistContext deve ser usado dentro de <WishlistProvider>');
  return ctx;
}

// Alias export para manter API esperada nos componentes:
export const useWishlist = useWishlistContext;
