import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { Allproductsdata } from "../../components/common/AllProductsData";
// import { ProductsData } from "../../components/common/ProductsData";

export const getAccessories = createAsyncThunk(
  "accessories/getAccessories",
  async () => {
    return fetch(
      "https://api.venturegames.pk/Products?ProductCategory=Accessories"
    ).then((res) => res.json());
  }
);

const initialState = {
  allAccessories: [],
};

export const accessoriesSlice = createSlice({
  name: "accessories",
  initialState,
  extraReducers: {
    [getAccessories.pending]: (state, action) => {
      state.loading = true;
    },
    [getAccessories.fulfilled]: (state, action) => {
      state.loading = false;
      state.allAccessories = action.payload;
    },
    [getAccessories.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  reducers: {
    FilterByConsole(state, action) {
      state.allAccessories = action.payload;
    },
    FilterByGenre(state, action) {
      state.allAccessories = action.payload;
    },
    FilterByCategory(state, action) {
      state.allAccessories = action.payload;
    },
    SortLowToHigh(state, action) {
      state.allAccessories = action.payload;
    },
    SortHighToLow(state, action) {
      state.allAccessories = action.payload;
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
} = accessoriesSlice.actions;

export default accessoriesSlice.reducer;
