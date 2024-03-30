import React from "react";

const cartContext = React.createContext({
  isLoggedIn: false,
  items: [],
  cartItem: [],
  totalItems: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  setLogInInfo: (val) => {},
  setUserEmail: (email) => {}, // Add setUserEmail to the context
  userEmail: "",
});

export default cartContext;
