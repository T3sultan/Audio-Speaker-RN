import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      const { cartProduct } = payload;

      //first check if the product is already in the cart
      const isItemCart = state.find(item => item.id === cartProduct.id);

      //if it exists then update the product and quantity
      if (isItemCart) {
        return state.map(item =>
          item.id === cartProduct.id ? { ...item, ...cartProduct } : item
        );
      } else {
        return [...state, { ...cartProduct }];
      }
    },
    deleteFromCart: (state, action) => {},
    reset: () => initialState,
  },
});

export const { addToCart, deleteFromCart, reset } = cartSlice.actions;
export default cartSlice.reducer;
