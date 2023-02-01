import { createSlice, PayloadAction } from '@reduxjs/toolkit';




export type CartItem = {
    id: string;
    title: string;
    price: string;
    description: string;
    category: string;
    image:string;
    rating: string;
    count:number;
    added: boolean;
};
  
export interface CartSliceState {
    items: CartItem[] | undefined;
}

export const getCartFromLS = (item:string) => {
    let data
    if (typeof window !== 'undefined') {
        data = localStorage.getItem(item);
    }
        const items = data ? JSON.parse(data) : [];
        return {
            items: items as CartItem[]
        };
};

const initialState: CartSliceState = getCartFromLS('cart');

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
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
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items?.filter((obj:any) => obj.id !== action.payload);
    },
    
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;