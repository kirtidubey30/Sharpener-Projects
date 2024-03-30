import React, { useEffect, useState } from "react";
import cartContext from "./cart-context.js";
import cartElements from "../Data/cartElements.js";
function CartContextProvider(props) {
  const [cartItem, setCartItem] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  // const [isLogIn, setIsLogin] = useState(false);
  const [isLogIn, setIsLogin] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const handleAddItem = (newItem) => {
    const existingIndex = cartItem.findIndex((item) => item.id === newItem.id);

    if (existingIndex !== -1) {
      const updatedCartItems = [...cartItem];
      updatedCartItems[existingIndex] = {
        ...updatedCartItems[existingIndex],
        quantity: updatedCartItems[existingIndex].quantity + 1,
      };
      setCartItem(updatedCartItems);
    } else {
      setCartItem([...cartItem, { ...newItem, quantity: 1 }]);
    }
  };

  const handlerRemoveItem = (id) => {
    const updatedItems = cartItem.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });

    setCartItem(updatedItems);
  };
  const setUserEmailHandler = (email) => {
    setUserEmail(email);
  };
  const logInstateHandler = (val) => {
    setIsLogin(val);
    localStorage.setItem("isLoggedIn", val ? "true" : "false"); // Set isLoggedIn in localStorage
  };
  const contextVal = {
    isLoggedIn: isLogIn,
    item: cartElements,
    cartItem: cartItem,
    totalItems: cartElements.length,
    addItem: handleAddItem,
    removeItem: handlerRemoveItem,
    setLogInInfo: logInstateHandler,
    setUserEmail: setUserEmailHandler, // Add setUserEmail to the context
    userEmail: userEmail,
  };
  return (
    <cartContext.Provider value={contextVal}>
      {props.children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
