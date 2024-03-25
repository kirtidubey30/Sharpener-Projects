import "./App.css";
import Header from "./components/Layout/Header";
import OrderCart from "./components/Layout/OrderCart";
import CartItemsAdded from "./components/UI/CartItemsAdded";
import { useState } from "react";

function App() {
  const [viewCart, setViewCart] = useState(false);
  const onClickofViewCart = () => {
    setViewCart(true);
  };
  const onCloseHandler = () => {
    setViewCart(false);
  };
  return (
    <div className="App">
      {viewCart && (
        <OrderCart
          onClickofViewCart={onClickofViewCart}
          onCloseHandler={onCloseHandler}
        />
      )}
      <Header onClickofViewCart={onClickofViewCart} />
      <CartItemsAdded />
    </div>
  );
}

export default App;
