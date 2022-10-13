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
      if (state.cartItems[state.cartTotalQuantity] === undefined) {
        state.cartItems[state.cartTotalQuantity] = action.payload;
        state.cartItems[state.cartTotalQuantity].quantity += 1;
        state.cartTotalQuantity += 1;
      } else {
        for (let i = 0; i < state.cartTotalQuantity; i++) {
          if (action.payload._id === state.cartItems[i]._id) {
            state.cartItems[i].quantity += 1;
          } else {
            state.cartItems[state.cartTotalQuantity] = action.payload;
            state.cartTotalQuantity += 1;
          }
        }
      }
    },

    DeleteFromCart(state, action) {
      for (let i = 0; i < state.cartTotalQuantity; i++) {
        if (action.payload === state.cartItems[i]._id) {
          delete state.cartItems[i];
        }
      }
      state.cartTotalQuantity -= 1;
    },
    SetProdQuantity(state, action) {
      state.cartItems[action.payload.id].quantity = action.payload.quantity;
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddToCart, DeleteFromCart, SetProdQuantity } = cartSlice.actions;

export default cartSlice.reducer;
