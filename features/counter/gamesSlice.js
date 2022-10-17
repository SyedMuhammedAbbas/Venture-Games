import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getGames = createAsyncThunk("games/getGames", async () => {
  return fetch(
    "https://api.venturegames.pk/Products?ProductCategory=Games"
  ).then((res) => res.json());
});

const initialState = {
  allGames: [],
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  extraReducers: {
    [getGames.pending]: (state, action) => {
      state.loading = true;
    },
    [getGames.fulfilled]: (state, action) => {
      state.loading = false;
      state.allGames = action.payload;
    },
    [getGames.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  reducers: {
    FilterByConsole(state, action) {
      state.allGames = action.payload;
    },
    FilterByGenre(state, action) {
      state.allGames = action.payload;
    },
    FilterByCategory(state, action) {
      state.allGames = action.payload;
    },
    SortLowToHigh(state, action) {
      state.allGames = action.payload;
    },
    SortHighToLow(state, action) {
      state.allGames = action.payload;
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
} = gamesSlice.actions;

export default gamesSlice.reducer;
