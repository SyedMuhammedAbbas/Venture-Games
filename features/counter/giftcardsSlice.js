import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { Allproductsdata } from "../../components/common/AllProductsData";
// import { ProductsData } from "../../components/common/ProductsData";

export const getGiftCards = createAsyncThunk(
  "giftcards/getGiftCards",
  async () => {
    let setgiftcards = "Gift Cards";
    return fetch(
      `https://api.venturegames.pk/Products?ProductCategory=${encodeURIComponent(
        setgiftcards
      )}`
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
      state.allProducts = action.payload;
    },
    [getGiftCards.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  reducers: {
    FilterByConsole(state, action) {
      state.allGiftCards.filter((p) => p.id);
    },
    FilterByGenre(state, action) {},
    FilterByCategory(state, action) {},
    SortLowToHigh(state, action) {},
    SortHighToLow(state, action) {},
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
