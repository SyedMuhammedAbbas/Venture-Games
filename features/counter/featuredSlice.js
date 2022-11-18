import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { Allproductsdata } from "../../components/common/AllProductsData";
// import { ProductsData } from "../../components/common/ProductsData";

export const getFeatured = createAsyncThunk(
  "featured/getFeatured",
  async () => {
    return fetch("https://api.doggel.co.uk/Products?Featured=true").then(
      (res) => res.json()
    );
  }
);

const initialState = {
  allFeatured: [],
};

export const featuredSlice = createSlice({
  name: "featured",
  initialState,
  extraReducers: {
    [getFeatured.pending]: (state, action) => {
      state.loading = true;
    },
    [getFeatured.fulfilled]: (state, action) => {
      state.loading = false;
      state.allFeatured = action.payload;
    },
    [getFeatured.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  reducers: {
    FilterByConsole(state, action) {
      state.allFeatured = action.payload;
    },
    FilterByGenre(state, action) {
      state.allFeatured = action.payload;
    },
    FilterByCategory(state, action) {
      state.allFeatured = action.payload;
    },
    SortLowToHigh(state, action) {
      state.allFeatured = action.payload;
    },
    SortHighToLow(state, action) {
      state.allFeatured = action.payload;
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
} = featuredSlice.actions;

export default featuredSlice.reducer;
