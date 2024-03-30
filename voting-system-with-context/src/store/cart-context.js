import { createContext } from "react";

const cartContext = createContext({
  items: [],
  totalItem: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
export default cartContext;
