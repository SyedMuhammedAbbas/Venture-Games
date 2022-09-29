import { configureStore } from "@reduxjs/toolkit";
// import { CartReducer } from "../context/Reducers";
import cartReducer from "../features/counter/cartSlice";
import productReducer from "../features/counter/productsSlice";
import carouselProductReducer from "../features/counter/carouselSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    carouselProducts: carouselProductReducer,
  },
});
