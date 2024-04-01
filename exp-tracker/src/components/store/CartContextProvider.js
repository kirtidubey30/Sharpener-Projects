import React, { useEffect, useState } from "react";
import cartContext from "./cart-context";
function CartContextProvider({ children }) {
  const [isUserSignedUp, setIsUserSignedUp] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const handleSignedUpVal = (val) => {
    setIsUserSignedUp(val);
    console.log(
      "inside handleSignedUpVal from  cartContextProvider where isUserSignedUp =" +
        isUserSignedUp +
        " and value passed is =" +
        val
    );
  };
  const handleLoginVal = (val) => {
    setIsUserLoggedIn(val);
    console.log(
      "inside handleSignedUpVal from  cartContextProvider where isUserSignedUp =" +
        setIsUserLoggedIn +
        " and value passed is =" +
        val
    );
  };
  const contextVal = {
    isSignedUp: isUserSignedUp,
    setSignedUpVal: handleSignedUpVal,
    isLoggedIn: isUserLoggedIn,
    setIsLoggedIn: handleLoginVal,
  };
  useEffect(() => {
    console.log("val of contextVal from Provider =", contextVal);
  }, [contextVal]);
  return (
    <cartContext.Provider value={contextVal}>{children}</cartContext.Provider>
  );
}

export default CartContextProvider;
