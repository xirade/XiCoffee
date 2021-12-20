import { createContext, useReducer } from "react";
import { useEffect } from "react/cjs/react.development";
import { cartReducer, initCart } from "./cartReducer";

// constants
import { ADD_TO_CART, CLEAR_CART } from "../constants/cart_vars";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], initCart);

  const addToCartHandler = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const clearCartHandler = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCartHandler, clearCartHandler }}>
      {children}
    </CartContext.Provider>
  );
}
