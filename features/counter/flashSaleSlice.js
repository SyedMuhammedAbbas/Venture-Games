import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { Allproductsdata } from "../../components/common/AllProductsData";
// import { ProductsData } from "../../components/common/ProductsData";

export const getFlashSale = createAsyncThunk(
  "flashsale/getFlashSale",

  async () => {
    return fetch("https://api.doggel.co.uk/Products?Sale=true").then((res) =>
      res.json()
    );
  }
);

const initialState = {
  allFlashSale: [],
};

export const flashSaleSlice = createSlice({
  name: "flashsale",
  initialState,
  extraReducers: {
    [getFlashSale.pending]: (state, action) => {
      state.loading = true;
    },
    [getFlashSale.fulfilled]: (state, action) => {
      state.loading = false;
      state.allFlashSale = action.payload;
    },
    [getFlashSale.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  reducers: {
    FilterByConsole(state, action) {
      state.allFlashSale = action.payload;
    },
    FilterByGenre(state, action) {
      state.allFlashSale = action.payload;
    },
    FilterByCategory(state, action) {
      state.allFlashSale = action.payload;
    },
    SortLowToHigh(state, action) {
      state.allFlashSale = action.payload;
    },
    SortHighToLow(state, action) {
      state.allFlashSale = action.payload;
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
} = flashSaleSlice.actions;

export default flashSaleSlice.reducer;
