import React, { useState, useEffect } from "react";
import cartContext from "./cart-context.js";

function CartContextProvider(props) {
  const [cartItem, setCartItem] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(cartItem);
  }, [cartItem]);

  const handleAddItem = (newItem) => {
    setCartItem((prevItems) => [...prevItems, newItem]);
  };

  const handleRemoveItem = (id) => {
    setCartItem((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  const handleSearchItem = (searchQuery) => {
    if (searchQuery.trim() === "") {
      setFilteredItems(cartItem);
    } else {
      const filtered = cartItem.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  const contextVal = {
    items: filteredItems,
    totalItems: filteredItems.length,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
    searchItem: handleSearchItem,
  };

  return (
    <cartContext.Provider value={contextVal}>
      {props.children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
