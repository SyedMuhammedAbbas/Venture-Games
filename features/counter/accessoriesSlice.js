import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { Allproductsdata } from "../../components/common/AllProductsData";
// import { ProductsData } from "../../components/common/ProductsData";

export const getAccessories = createAsyncThunk(
  "accessories/getAccessories",
  async () => {
    return fetch("https://api.venturegames.pk/Accessories").then((res) =>
      res.json()
    );
  }
);

const initialState = {
  allAccessories: [],
};

export const accesoriesSlice = createSlice({
  name: "accessories",
  initialState,
  extraReducers: {
    [getAccessories.pending]: (state, action) => {
      state.loading = true;
    },
    [getAccessories.fulfilled]: (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
    },
    [getAccessories.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  reducers: {
    FilterByConsole(state, action) {
      state.allAccessories.filter((p) => p.id);
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
} = accessoriesSlice.actions;

export default accessoriesSlice.reducer;
