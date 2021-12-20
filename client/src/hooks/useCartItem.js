import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCartItem = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartItem() must be used inside a CartProvider");
  }
  return context;
};
