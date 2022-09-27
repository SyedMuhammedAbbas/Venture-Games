import { createSlice } from "@reduxjs/toolkit";
import { MdAttractions } from "react-icons/md";

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
      // const itemIndex = state.cartItems.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // if (itemIndex >= 0) {
      //   state.cartItems[itemIndex].cartQuantity += 1;
      //   console.log(state.cartItems[itemIndex].cartQuantity);
      // } else {
      //   const tempProduct = { ...action.payload, cartQuantity: 1 };
      //   console.log(tempProduct);
      //   state.cartItems.push(tempProduct);
      // }
      const prod = state.cartItems[action.payload.id];
      if (prod) {
        prod.quantity += 1;
      } else {
        state.cartItems[action.payload.id] = { ...action.payload, quantity: 1 };
      }
    },
    RemoveFromCart(state, action) {
      // const nextCartItems = state.cartItems.filter(
      //   (p) => p.id !== action.payload.id
      // );
      // state.cartItems = nextCartItems;
      const prod = state.cartItems[action.payload.id];
      if (prod) {
        if (prod.quantity <= 1) {
          state.cartItems[action.payload.id] = null;
          // DeleteFromCart(state, action);
        } else {
          prod.quantity -= 1;
        }
      }
    },
    DeleteFromCart(state, action) {
      // state.cartItems[action.payload.id] = null;
      const nextCartItems = state.cartItems.filter(
        (p) => p.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
    },
    // ViewProduct: (state, action) => {
    //   state.cartItems = action.payload;
    //   console.log()
    // },
  },
});

// Action creators are generated for each case reducer function
export const { AddToCart, RemoveFromCart, ViewProduct } = cartSlice.actions;

export default cartSlice.reducer;
