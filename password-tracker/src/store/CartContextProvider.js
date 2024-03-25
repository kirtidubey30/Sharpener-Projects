import React, { useState } from "react";
import cartContext from "./cart-context.js";

function CartContextProvider(props) {
  const [cartItem, setCartItem] = useState([]);

  const handleAddItem = (newItem) => {
    setCartItem((prevItems) => [...prevItems, newItem]);
  };

  const handleRemoveItem = (id) => {
    setCartItem((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  const contextVal = {
    items: cartItem,
    totalItems: cartItem.length,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
  };

  return (
    <cartContext.Provider value={contextVal}>
      {props.children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
