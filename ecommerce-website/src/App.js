import { useContext, useEffect, useState } from "react";
import "./App.css";
import CartComponent from "./components/UI/CartComponent";
import MusicComponent from "./components/UI/MusicComponent";
import Header from "./components/layout/Header";
import cartContext from "./components/store/cart-context";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const toggleCartOpen = (value) => {
    setCartOpen(value);
  };
  const ectx = useContext(cartContext);
  return (
    <div className="App">
      <Header setCartOpen={toggleCartOpen} />
      <MusicComponent />
      {cartOpen && <CartComponent setCartOpen={toggleCartOpen} />}
    </div>
  );
}

export default App;
