import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: {},
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart(state, action) {
      const prod = state.cartItems[action.payload.id];
      if (prod) {
        prod.quantity += 1;
      } else {
        state.cartItems[action.payload.id] = { ...action.payload, quantity: 1 };
      }
    },

    DeleteFromCart(state, action) {
      delete state.cartItems[action.payload.id];
    },
    SetProdQuantity(state, action) {
      state.cartItems[action.payload.id].quantity = action.payload.quantity;
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddToCart, DeleteFromCart, SetProdQuantity } = cartSlice.actions;

export default cartSlice.reducer;
