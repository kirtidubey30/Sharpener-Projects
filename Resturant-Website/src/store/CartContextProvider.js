import React from "react";
import cartContext from "./cart-context";
import { useState } from "react";
function CartContextProvider(props) {
  console.log("inside cartContextProvider*** ");
  // const [cartItem, setCartItem] = useState(props.initialItems || []);
  const [cartItem, setCartItem] = useState([]);
  const addItemToCartHandler = (newItem) => {
    const existingItemIndex = cartItem.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingItemIndex !== -1) {
      console.log("Item already exists in cart. Updating quantity...");
      const updatedCartItems = [...cartItem];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        amount: updatedCartItems[existingItemIndex].amount + 1, // Increase quantity by 1
      };
      console.log("Updated cart items after adding:", updatedCartItems);
      setCartItem(updatedCartItems);
    } else {
      console.log("Item does not exist in cart. Adding to cart...");
      setCartItem((prevItems) => [...prevItems, { ...newItem, amount: 1 }]);
    }
  };

  const removeItemFromCartHandler = (item) => {};
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
