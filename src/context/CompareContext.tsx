import React, {
  createContext,
  useReducer,
  useEffect,
  ReactNode,
  useContext,
} from 'react';

export type CompareItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

type CompareState = {
  items: CompareItem[];
};

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
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (exists) return state;
      return { items: [...state.items, action.payload] };
    }

    case 'REMOVE_FROM_COMPARE':
      return {
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case 'CLEAR_COMPARE':
      return { items: [] };

    default:
      throw new Error(`Unhandled action type: ${JSON.stringify(action)}`);
  }
}

export type CompareContextType = {
  compare: CompareItem[];
  addToCompare: (item: CompareItem) => void;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
  loadCompareFromStorage: () => void;
};

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(compareReducer, initialState);

  const loadCompareFromStorage = () => {
    try {
      const data = window.localStorage.getItem('compareItems');
      if (data) {
        const parsed: CompareItem[] = JSON.parse(data);
        dispatch({ type: 'LOAD_COMPARE', payload: parsed });
      }
    } catch {
      // falha silenciosa
    }
  };

  useEffect(() => {
    window.localStorage.setItem('compareItems', JSON.stringify(state.items));
  }, [state.items]);

  const addToCompare = (item: CompareItem) => {
    dispatch({ type: 'ADD_TO_COMPARE', payload: item });
  };

  const removeFromCompare = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_COMPARE', payload: { id } });
  };

  const clearCompare = () => {
    dispatch({ type: 'CLEAR_COMPARE' });
  };

  return (
    <CompareContext.Provider
      value={{
        compare: state.items,
        addToCompare,
        removeFromCompare,
        clearCompare,
        loadCompareFromStorage,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare(): CompareContextType {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare deve ser usado dentro de um <CompareProvider>');
  }
  return context;
}
