import React, { useState } from "react";
import cartContext from "./cart-context";

function CartContextProvider(props) {
  const [cartItem, setCartItem] = useState([]);

  const cartContextVal = {
    items: cartItem,
    totalItems: cartItem.length,
    cartItems: cartItem,
    addItem: (item) => {
      addItemToCartHandler(item);
    },
    removeItem: (id) => {
      removeItemFromCartHandler(id);
    },
  };
  // const addItemToCartHandler = (addItem) => {
  //   const existingItemIndex = cartItem.findIndex(
  //     (addItem) => addItem.id === existingItemIndex.id
  //   );

  //   if (existingItemIndex !== -1) {
  //     //exists
  //     const updatedVal = [...cartItem];
  //     updatedVal[existingItemIndex] = {
  //       ...updatedVal[existingItemIndex],
  //       amount: updatedVal[existingItemIndex].amount + 1,
  //       quantityAvailable: updatedVal[existingItemIndex].quantityAvailable - 1,
  //     };
  //     setCartItem(updatedVal);
  //   } else {
  //     //add the new value
  //     setCartItem((prevItem) => [
  //       ...prevItem,
  //       {
  //         ...addItem,
  //         amount: 1,
  //         quantityAvailable: addItem.quantityAvailable,
  //       },
  //     ]);
  //   }
  // };
  const addItemToCartHandler = (addItem) => {
    const existingItemIndex = cartItem.findIndex(
      (item) => item.id === addItem.id
    );

    if (existingItemIndex !== -1) {
      // Item already exists in the cart
      const updatedVal = [...cartItem];
      updatedVal[existingItemIndex] = {
        ...updatedVal[existingItemIndex],
        amount: updatedVal[existingItemIndex].amount + 1,
        quantityAvailable: updatedVal[existingItemIndex].quantityAvailable - 1,
      };
      setCartItem(updatedVal);
    } else {
      // Add the new item to the cart
      setCartItem((prevItem) => [
        ...prevItem,
        {
          ...addItem,
          amount: 1,
          quantityAvailable: addItem.quantityAvailable,
        },
      ]);
    }
  };

  const removeItemFromCartHandler = (itemId) => {
    setCartItem((prevItem) => prevItem.filter((item) => item.id !== itemId));
  };

  return (
    <cartContext.Provider value={cartContextVal}>
      {props.children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
