import React, { useContext, useState } from "react";
import Header from "./components/Layout/Header";
import Menu from "./components/Layout/Menu/Menu";
import Cart from "./components/Cart/Cart";
import cartContext from "./store/cart-context";
function App() {
  const [viewCart, setViewCart] = useState(false);
  const cartCtx = useContext(cartContext);
  const onClickofViewCart = (isFromCloseBtn) => {
    if (isFromCloseBtn) {
      setViewCart(false);
    } else {
      setViewCart(true);
    }
  };
  //const initialItems = cartCtx.items;
  const handleonAddItem = (item) => {
    console.log("handleAddItem called where item fromApp.js =", item);
    cartCtx.addItem(item);
  };
  return (
    <>
      {viewCart && <Cart onClickofViewCart={onClickofViewCart} />}
      <Header onClickofViewCart={onClickofViewCart} />
      <Menu handleonAddItem={handleonAddItem} />
    </>
  );
}

export default App;
