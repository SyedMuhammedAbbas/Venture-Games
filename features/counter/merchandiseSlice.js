import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMerchandise = createAsyncThunk(
  "merchandise/getMerchandise",
  async () => {
    return fetch(
      "https://api.venturegames.pk/Products?ProductCategory=Merchandise"
    ).then((res) => res.json());
  }
);

const initialState = {
  allMerchandise: [],
};

export const merchandiseSlice = createSlice({
  name: "merchandise",
  initialState,
  extraReducers: {
    [getMerchandise.pending]: (state, action) => {
      state.loading = true;
    },
    [getMerchandise.fulfilled]: (state, action) => {
      state.loading = false;
      state.allGames = action.payload;
    },
    [getMerchandise.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  reducers: {
    FilterByConsole(state, action) {
      state.allMerchandise = action.payload;
    },
    FilterByGenre(state, action) {
      state.allMerchandise = action.payload;
    },
    FilterByCategory(state, action) {
      state.allMerchandise = action.payload;
    },
    SortLowToHigh(state, action) {
      state.allMerchandise = action.payload;
    },
    SortHighToLow(state, action) {
      state.allMerchandise = action.payload;
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
} = merchandiseSlice.actions;

export default merchandiseSlice.reducer;
