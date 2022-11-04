import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  region: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart(state, action) {
      let flag = false;

      if (state.cartTotalQuantity == 0) {
        if (action.payload.Quantity > 0) {
          state.cartItems[state.cartTotalQuantity] = action.payload;
          state.cartItems[state.cartTotalQuantity].quantity = 1;
          state.cartTotalQuantity += 1;
          toast.success("Product Added to Cart", {
            className: "toast-message",
          });
        }
      } else {
        for (let i = 0; i < state.cartTotalQuantity; i++) {
          if (action.payload._id === state.cartItems[i]._id) {
            if (state.cartItems[i].quantity < action.payload.Quantity)
              flag = true;
            let quan = state.cartItems[i].quantity;
            quan += 1;
            state.cartItems[i].quantity = quan;
          }
        }
        if (!flag) {
          if (action.payload.Quantity > 0) {
            state.cartItems[state.cartTotalQuantity] = action.payload;
            state.cartItems[state.cartTotalQuantity].quantity = 1;
            state.cartTotalQuantity += 1;
            toast.success("Product Added to Cart", {
              className: "toast-message",
            });
          }
        }
      }
    },

    setCartItem(state, action) {
      for(let i = 0; i < action.payload.length; i++) {
        state.cartItems[i] = action.payload[i].Product;
      }
      state.cartTotalQuantity = action.payload.length;
    },

    DeleteFromCart(state, action) {
      for (let i = 0; i < state.cartItems.length; i++) {
        console.log("here");
        if (action.payload === state.cartItems[i]._id) {
          state.cartItems.splice(i, 1);
          toast.success("Product Removed from Cart", {
            className: "toast-message",
          });
        }
      }
      state.cartTotalQuantity -= 1;
    },
    SetProdQuantity(state, action) {
      for (let i = 0; i < state.cartItems.length; i++) {
        if (state.cartItems[i]._id === action.payload._id) {
          state.cartItems[i].quantity = action.payload.quantity;
        }
      }
    },
    setRegion(state, action) {
      state.region = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  AddToCart,
  DeleteFromCart,
  SetProdQuantity,
  setRegion,
  setCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
