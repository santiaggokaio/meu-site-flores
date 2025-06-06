import React, {
  createContext,
  useReducer,
  useEffect,
  ReactNode,
  useContext,
} from 'react';

export type WishlistItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

type WishlistState = {
  items: WishlistItem[];   // ← “items” (em inglês)
};

type WishlistAction =
  | { type: 'LOAD_WISHLIST'; payload: WishlistItem[] }
  | { type: 'ADD_TO_WISHLIST'; payload: WishlistItem }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: { id: string } }
  | { type: 'CLEAR_WISHLIST' };

const initialState: WishlistState = {
  items: [] as WishlistItem[],  // ← Trocado “itens” por “items”
};

function wishlistReducer(
  state: WishlistState,
  action: WishlistAction
): WishlistState {
  switch (action.type) {
    case 'LOAD_WISHLIST':
      return { items: action.payload };

    case 'ADD_TO_WISHLIST': {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (exists) return state;
      return { items: [...state.items, action.payload] };
    }

    case 'REMOVE_FROM_WISHLIST':
      return {
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case 'CLEAR_WISHLIST':
      return { items: [] };

    default:
      throw new Error(`Unhandled action type: ${JSON.stringify(action)}`);
  }
}

export type WishlistContextType = {
  items: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  clearWishlist: () => void;
  loadWishlistFromStorage: () => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  const loadWishlistFromStorage = () => {
    try {
      const data = window.localStorage.getItem('wishlistItems');
      if (data) {
        const parsed: WishlistItem[] = JSON.parse(data);
        dispatch({ type: 'LOAD_WISHLIST', payload: parsed });
      }
    } catch {
      // falha silenciosa
    }
  };

  useEffect(() => {
    window.localStorage.setItem('wishlistItems', JSON.stringify(state.items));
  }, [state.items]);

  const addToWishlist = (item: WishlistItem) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: item });
  };

  const removeFromWishlist = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: { id } });
  };

  const clearWishlist = () => {
    dispatch({ type: 'CLEAR_WISHLIST' });
  };

  return (
    <WishlistContext.Provider
      value={{
        items: state.items,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        loadWishlistFromStorage,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist(): WishlistContextType {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist deve ser usado dentro de um <WishlistProvider>');
  }
  return context;
}
