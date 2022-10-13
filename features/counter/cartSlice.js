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
      // let flag = false;
      // for (let i = 0; i < state.cartItems.length; i++) {
      //   if (state.cartItems[i]._id === action.payload._id) {
      //     flag = true;
      //     let quan = state.cartItems[i].quantity;
      //     quan += 1;
      //     const prod = action.payload;
      //     state.cartItems[i] = {
      //       prod,
      //       quantity: quan,
      //     };
      //     state.cartTotalQuantity += 1;
      //   }
      // }
      // if(!flag) {
      //   const prod = action.payload;
      //   state.cartItems[state.cartTotalQuantity] = {
      //     prod,
      //     quantity: 1,
      //   };
      //   state.cartTotalQuantity += 1;
      // }
      const prod = action.payload;
      state.cartItems[state.cartTotalQuantity] = prod;
      state.cartTotalQuantity += 1;

      console.log("hello in cart");
      console.log(state.cartItems);
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
