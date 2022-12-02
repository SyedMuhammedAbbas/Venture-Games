import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getConsoles = createAsyncThunk(
  "consoles/getConsoles",
  async () => {
    return fetch(
      "https://api.venturegames.pk/Products?ProductCategory=Consoles"
    ).then((res) => res.json());
  }
);

const initialState = {
  allConsoles: [],
};

export const consolesSlice = createSlice({
  name: "consoles",
  initialState,
  extraReducers: {
    [getConsoles.pending]: (state, action) => {
      state.loading = true;
    },
    [getConsoles.fulfilled]: (state, action) => {
      state.loading = false;
      state.allConsoles = action.payload;
    },
    [getConsoles.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  reducers: {
    FilterByConsole(state, action) {
      state.allConsoles = action.payload;
    },
    FilterByGenre(state, action) {
      state.allConsoles = action.payload;
    },
    FilterByCategory(state, action) {
      state.allConsoles = action.payload;
    },
    SortLowToHigh(state, action) {
      state.allConsoles = action.payload;
    },
    SortHighToLow(state, action) {
      state.allConsoles = action.payload;
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
} = consolesSlice.actions;

export default consolesSlice.reducer;
