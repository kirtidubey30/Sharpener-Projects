import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Menu from "./components/Layout/Menu/Menu";
import Cart from "./components/Cart/Cart";
function App() {
  const [viewCart, setViewCart] = useState(false);
  const onClickofViewCart = (isFromCloseBtn) => {
    if (isFromCloseBtn) {
      setViewCart(false);
    } else {
      setViewCart(true);
    }
  };
  return (
    <>
      {viewCart && <Cart onClickofViewCart={onClickofViewCart} />}
      <Header onClickofViewCart={onClickofViewCart} />
      <Menu />
    </>
  );
}

export default App;
