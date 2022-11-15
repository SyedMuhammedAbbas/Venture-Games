import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { Allproductsdata } from "../../components/common/AllProductsData";
// import { ProductsData } from "../../components/common/ProductsData";

export const getSearched = createAsyncThunk(
  "search/getSearched",
  async () => {
    return fetch(
      "https://api.venturegames.pk/Products?Title=s"
    ).then((res) => res.json());
  }
);

const initialState = {
  allSearched: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: {
    [getSearched.pending]: (state, action) => {
      state.loading = true;
    },
    [getSearched.fulfilled]: (state, action) => {
      state.loading = false;
      state.allSearched = action.payload;
    },
    [getSearched.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  reducers: {
    FilterByConsole(state, action) {
      state.allSearched = action.payload;
    },
    FilterByGenre(state, action) {
      state.allSearched = action.payload;
    },
    FilterByCategory(state, action) {
      state.allSearched = action.payload;
    },
    SortLowToHigh(state, action) {
      state.allSearched = action.payload;
    },
    SortHighToLow(state, action) {
      state.allSearched = action.payload;
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
} = searchSlice.actions;

export default searchSlice.reducer;
