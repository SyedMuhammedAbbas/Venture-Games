import { createSlice } from "@reduxjs/toolkit";
import { Allproductsdata } from "../../components/common/AllProductsData";

const initialState = { allProducts: Allproductsdata };

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
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
