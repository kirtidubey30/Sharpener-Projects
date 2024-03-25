import { useContext } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import cartContext from "./store/cart-context";
import ItemsAdded from "./components/Layout/ItemsAdded";

function App() {
  const pwdCtx = useContext(cartContext);
  return (
    <div className="App">
      <Header />
      <ItemsAdded />
    </div>
  );
}

export default App;
