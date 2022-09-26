import { createContext, useContext, useReducer } from "react";
import { Allproductsdata } from "../components/common/AllProductsData";
import { CartReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    Allproductsdata: Allproductsdata,
    Cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
