import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart(state, action) {
      // const prod = state.cartItems[action.payload._id];
      // if (prod) {
      //   prod.quantity += 1;
      // } else {
      //   state.cartItems[action.payload._id] = {
      //     ...action.payload,
      //     quantity: 1,
      //   };
      // }
      let flag = false;
      if (state.cartTotalQuantity === 0) {
        const prod = action.payload;
        state.cartItems[state.cartTotalQuantity] = {
          prod,
          quantity: 1,
        };
        state.cartTotalQuantity += 1;
      } else {
        for (let i = 0; i < state.cartTotalQuantity; i++) {
          if (state.cartItems[i]._id === action.payload._id) {
            flag = true;
            let quan = state.cartItems[i].quantity;
            quan += 1;
            state.cartItems[i] = {
              ...action.payload,
              quantity: quan,
            };
            state.cartTotalQuantity += 1;
          }
        }
        if (!flag) {
          prod = action.payload;
          state.cartItems[state.cartTotalQuantity] = {
            prod,
            quantity: 1,
          };
          state.cartTotalQuantity += 1;
        }
      }
    },

    DeleteFromCart(state, action) {
      // state.cartItems.filter((index) => {
      //   index._id === action.payload._id;
      // });
      for (let i = 0; i < state.cartItems.length; i++) {
        if (state.cartItems[i]._id === action.payload._id) {
          let remove = state.cartItems.splice(i, 1);
        }
      }
      state.cartTotalQuantity -= 1;
    },
    SetProdQuantity(state, action) {
      state.cartItems[action.payload._id].quantity = action.payload.quantity;
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddToCart, DeleteFromCart, SetProdQuantity } = cartSlice.actions;

export default cartSlice.reducer;
