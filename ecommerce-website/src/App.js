import { useState } from "react";
import "./App.css";
import CartComponent from "./components/UI/CartComponent";
import Header from "./components/layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const toggleCartOpen = (value) => {
    setCartOpen(value);
  };
  return (
    <div className="App">
      <Header setCartOpen={toggleCartOpen} />
      <Outlet />
      {cartOpen && <CartComponent setCartOpen={toggleCartOpen} />}
      <Footer />
    </div>
  );
}

export default App;
