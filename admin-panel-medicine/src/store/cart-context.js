import React from "react";

const cartContext = React.createContext({
  items: [],
  totalItems: 0,
  cartItems: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});
export default cartContext;
