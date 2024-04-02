import { createContext } from "react";

const cartContext = createContext({
  isSignedUp: false,
  setSignedUpVal: (val) => {},
  isLoggedIn: false,
  setIsLoggedIn: (val) => {},
  isPremiusActive: false,
});

export default cartContext;
