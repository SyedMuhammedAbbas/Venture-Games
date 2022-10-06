import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { Allproductsdata } from "../../components/common/AllProductsData";
import { ProductsData } from "../../components/common/ProductsData";

// export const getProducts = createAsyncThunk(
//   "products/getProducts",
//   async () => {
//     return fetch("https://api.venturegames.pk/Products").then((res) =>
//       res.json()
//     );
//   }
// );

const initialState = {
  allProducts: ProductsData,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  // extraReducers: {
  //   [getProducts.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [getProducts.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.allProducts = action.payload;
  //   },
  //   [getProducts.rejected]: (state, action) => {
  //     state.loading = false;
  //   },
  // },
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
