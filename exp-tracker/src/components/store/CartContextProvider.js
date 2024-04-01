import React, { useState } from "react";
import cartContext from "./cart-context";
function CartContextProvider({ children }) {
  const [isUserSignedUp, setIsUserSignedUp] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const handleSignedUpVal = (val) => {
    setIsUserSignedUp(val);
  };
  const handleLoginVal = (val) => {
    setIsUserLoggedIn(val);
  };
  const contextVal = {
    isSignedUp: isUserSignedUp,
    setSignedUpVal: handleSignedUpVal,
    isLoggedIn: isUserLoggedIn,
    setIsLoggedIn: handleLoginVal,
  };
  return (
    <cartContext.Provider value={contextVal}>{children}</cartContext.Provider>
  );
}

export default CartContextProvider;
