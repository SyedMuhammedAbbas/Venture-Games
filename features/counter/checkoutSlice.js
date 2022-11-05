import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  billingInfo: {}
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setInformation(state, action) {
      console.log(action.payload);  
      state.billingInfo = action.payload;
    },

    clearInformation(state) {
      state.billingInfo = {};
    }

  },
});

// Action creators are generated for each case reducer function
export const { setInformation,clearInformation } = checkoutSlice.actions;

export default checkoutSlice.reducer;
