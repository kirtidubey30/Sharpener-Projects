import { useState } from "react";
import "./App.css";
import CartComponent from "./components/UI/CartComponent";
import Header from "./components/layout/Header";
import { Outlet } from "react-router-dom";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const toggleCartOpen = (value) => {
    setCartOpen(value);
  };
  return (
    <div className="App">
      <Header setCartOpen={toggleCartOpen} />
      <Outlet />
      {/* <MusicComponent /> */}
      {cartOpen && <CartComponent setCartOpen={toggleCartOpen} />}
    </div>
  );
}

export default App;
