import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getReviews = createAsyncThunk("reviews/getPReviews", async () => {
  return fetch("https://api.venturegames.pk/ViewReview").then((res) =>
    res.json()
  );
});

const initialState = {
  allReviews: [],
};

export const clientSlice = createSlice({
  name: "reviews",
  initialState,
  extraReducers: {
    [getReviews.pending]: (state, action) => {
      state.loading = true;
    },
    [getReviews.fulfilled]: (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
    },
    [getReviews.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  reducers: {
    FilterByConsole(state, action) {
      state.allReviews.filter((p) => p.id);
    },
    FilterByGenre(state, action) {},
    FilterByCategory(state, action) {},
    SortLowToHigh(state, action) {},
    SortHighToLow(state, action) {},
  },
});

// Action creators are generated for each case reducer function
export const {} = clientSlice.actions;

export default clientSlice.reducer;
