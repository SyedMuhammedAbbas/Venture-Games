import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { Allproductsdata } from "../../components/common/AllProductsData";
// import { ProductsData } from "../../components/common/ProductsData";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    return fetch("https://api.doggel.co.uk/Products").then((res) => res.json());
  }
);

const initialState = {
  allProducts: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      console.log(state.allProducts);
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  reducers: {
    FilterByConsole(state, action) {
      state.allProducts = action.payload;
    },
    FilterByGenre(state, action) {
      state.allProducts = action.payload;
    },
    FilterByCategory(state, action) {
      state.allProducts = action.payload;
    },
    SortLowToHigh(state, action) {
      state.allProducts = action.payload;
    },
    SortHighToLow(state, action) {
      state.allProducts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  FilterByConsole,
  FilterByGenre,
  FilterByCategory,
  SortLowToHigh,
  SortHighToLow,
} = productsSlice.actions;

export default productsSlice.reducer;
