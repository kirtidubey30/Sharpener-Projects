import React from "react";
import Header from "./components/Layout/Header";
import Menu from "./components/Layout/Menu/Menu";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <>
      <Cart />
      <Header />
      <Menu />
    </>
  );
}

export default App;
