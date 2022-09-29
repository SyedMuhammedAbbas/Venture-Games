import { createSlice } from "@reduxjs/toolkit";
// import { MdAttractions } from "react-icons/md";
import { Allproductsdata } from "../../components/common/AllProductsData";

const initialState = { allProducts: Allproductsdata };

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // AddToCart(state, action) {
    //   const prod = state.cartItems[action.payload.id];
    //   if (prod) {
    //     prod.quantity += 1;
    //   } else {
    //     state.cartItems[action.payload.id] = { ...action.payload, quantity: 1 };
    //   }
    // },
    // DeleteFromCart(state, action) {
    //   state.cartItems.filter((p) => p.id !== action.payload.id);
    // },
    FilterByType(state, action) {
      state.allProducts.filter((p) => p.id);
    },
    FilterByGenre(state, action) {},
    FilterByCategory(state, action) {},
    SortLowToHigh(state, action) {},
    SortHighToLow(state, action) {},
  },
});

// Action creators are generated for each case reducer function
export const {
  FilterByType,
  FilterByGenre,
  FilterByCategory,
  SortLowToHigh,
  SortHighToLow,
} = productsSlice.actions;

export default productsSlice.reducer;
