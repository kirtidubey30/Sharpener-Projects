import React from "react";

const cartContext = React.createContext({
  items: [],
  totalItems: 0,
  addItem: (items) => {},
  removeItem: (id) => {},
});

export default cartContext;
