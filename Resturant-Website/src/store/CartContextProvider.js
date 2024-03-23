import React from "react";
import cartContext from "./cart-context";
import { useState } from "react";
function CartContextProvider(props) {
  const [cartItem, setCartItem] = useState([]);
  const addItemToCartHandler = (newItem) => {
    const existingItemIndex = cartItem.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItem];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        amount: updatedCartItems[existingItemIndex].amount + 1,
      };
      setCartItem(updatedCartItems);
    } else {
      setCartItem((prevItems) => [...prevItems, { ...newItem, amount: 1 }]);
    }
  };

  const removeItemFromCartHandler = (itemId) => {
    setCartItem((prevItem) => prevItem.filter((item) => item.id !== itemId));
  };
  const cartContextVal = {
    items: cartItem,
    totalItems: cartItem.length,
    addItem: (item) => {
      addItemToCartHandler(item);
    },
    removeItem: (id) => {
      removeItemFromCartHandler(id);
    },
  };
  return (
    <cartContext.Provider value={cartContextVal}>
      {props.children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
