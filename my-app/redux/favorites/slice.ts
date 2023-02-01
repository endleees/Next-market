import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {CartItem,getCartFromLS} from '../cart/slice'

const initialState: CartSliceState = getCartFromLS('favorites');

export interface CartSliceState {
    items: CartItem[] | undefined;
}

const cartSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
      addFavorites(state, action: PayloadAction<CartItem>) {
        const findItem = state.items?.find((obj:any) => obj.id === action.payload.id);
  
        if (findItem) {
          findItem.count++;
        } else {
          state.items?.push({
            ...action.payload,
            count: 1,
          });
        }
  
      },
      removeFavorites(state, action: PayloadAction<string>) {
        state.items = state.items?.filter((obj:any) => obj.id !== action.payload);
      },
      
    },
});

export const { addFavorites, removeFavorites } = cartSlice.actions;

export default cartSlice.reducer;