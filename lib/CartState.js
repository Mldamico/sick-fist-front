import { createContext, useContext, useState } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

export const CartStateProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };
  const openCart = () => {
    setCartOpen(true);
  };
  const closeCart = () => {
    setCartOpen(false);
  };
  return (
    <LocalStateProvider
      value={{ cartOpen, setCartOpen, openCart, closeCart, toggleCart }}
    >
      {children}
    </LocalStateProvider>
  );
};

export const useCart = () => {
  const all = useContext(LocalStateProvider);
  return all;
};
