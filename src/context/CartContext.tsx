"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

/**
 * Cada item do carrinho deve ter, no mínimo:
 * - id, name, price, quantity, image
 */
export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type State = CartItem[];

// Ações possíveis no reducer
type Action =
  | { type: 'LOAD'; payload: CartItem[] }
  | { type: 'ADD'; payload: CartItem }
  | { type: 'REMOVE'; payload: string }
  | { type: 'UPDATE_QTY'; payload: { id: string; qty: number } }
  | { type: 'CLEAR' };

// Função que altera o estado do carrinho
function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'LOAD':
      return action.payload;
    case 'ADD': {
      const item = action.payload;
      const idx = state.findIndex((i) => i.id === item.id);
      if (idx !== -1) {
        return state.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...state, item];
    }
    case 'REMOVE':
      return state.filter((i) => i.id !== action.payload);
    case 'UPDATE_QTY':
      return state.map((i) =>
        i.id === action.payload.id ? { ...i, quantity: action.payload.qty } : i
      );
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

// Feature flag para ativar persistência
const enablePersistence =
  process.env.NEXT_PUBLIC_CART_PERSISTENCE === 'true';

// Carrega o estado inicial do localStorage (ou array vazio)
function loadInitialCart(): CartItem[] {
  if (!enablePersistence) return [];
  try {
    const saved = window.localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  } catch (err) {
    console.error('Falha ao carregar carrinho:', err);
    return [];
  }
}

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadInitialCart);

  // Persiste o carrinho no localStorage sempre que ele mudar
  useEffect(() => {
    if (!enablePersistence) return;
    try {
      window.localStorage.setItem('cartItems', JSON.stringify(cart));
    } catch (err) {
      console.error('Falha ao salvar carrinho:', err);
    }
  }, [cart]);

  const addToCart = (item: CartItem) => dispatch({ type: 'ADD', payload: item });
  const removeFromCart = (id: string) => dispatch({ type: 'REMOVE', payload: id });
  const updateQuantity = (id: string, qty: number) =>
    dispatch({ type: 'UPDATE_QTY', payload: { id, qty } });
  const clearCart = () => dispatch({ type: 'CLEAR' });

  // Memoriza o valor do contexto para evitar re-renders desnecessários
  const contextValue = useMemo(
    () => ({ cart, addToCart, removeFromCart, updateQuantity, clearCart }),
    [cart]
  );

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um <CartProvider>');
  }
  return context;
}
