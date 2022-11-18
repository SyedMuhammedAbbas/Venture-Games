import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { Allproductsdata } from "../../components/common/AllProductsData";
// import { ProductsData } from "../../components/common/ProductsData";

export const getGiftCards = createAsyncThunk(
  "giftcards/getGiftCards",
  async () => {
    let setgiftcards = "Gift Cards";
    return fetch(
      // `https://api.doggel.co.uk/Products?ProductCategory=${encodeURIComponent(
      //   setgiftcards
      // )}`
      "https://api.doggel.co.uk/Products?ProductCategory=Gift%20Cards"
    ).then((res) => res.json());
  }
);

const initialState = {
  allGiftCards: [],
};

export const giftcardsSlice = createSlice({
  name: "giftcards",
  initialState,
  extraReducers: {
    [getGiftCards.pending]: (state, action) => {
      state.loading = true;
    },
    [getGiftCards.fulfilled]: (state, action) => {
      state.loading = false;
      state.allGiftCards = action.payload;
    },
    [getGiftCards.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  reducers: {
    FilterByConsole(state, action) {
      state.allGiftCards = action.payload;
    },
    FilterByGenre(state, action) {
      state.allGiftCards = action.payload;
    },
    FilterByCategory(state, action) {
      state.allGiftCards = action.payload;
    },
    SortLowToHigh(state, action) {
      state.allGiftCards = action.payload;
    },
    SortHighToLow(state, action) {
      state.allGiftCards = action.payload;
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
} = giftcardsSlice.actions;

export default giftcardsSlice.reducer;
