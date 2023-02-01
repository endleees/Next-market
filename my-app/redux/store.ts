import { configureStore } from '@reduxjs/toolkit';
import cart from './cart/slice';
import favorites from './favorites/slice';
import { useDispatch } from 'react-redux';
import { Dispatch,Action } from '@reduxjs/toolkit';


const localStorageMiddleware:any = ({ getState }: { getState: () => RootState }) => (next: Dispatch) => (action: Action) => {
  const result = next(action);
  const state = getState();
  localStorage.setItem('state', JSON.stringify(state));
  return result;
};

const loadStateFromLocalStorage:any = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    cart,
    favorites
  },
  middleware: [localStorageMiddleware],
  preloadedState: loadStateFromLocalStorage()
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();