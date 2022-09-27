import { createSlice } from "@reduxjs/toolkit";
import { MdAttractions } from "react-icons/md";
import { Allproductsdata } from "../../components/common/AllProductsData";

const initialState = { allProducts: Allproductsdata };

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
      state.cartItems.filter((p) => p.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddToCart, DeleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
