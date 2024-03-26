import "./App.css";
import ItemAddedToCart from "./components/UI/ItemAddedToCart";
import { ProductList } from "./components/layout/ProductList";

function App() {
  return (
    <div className="App">
      <ProductList />
      <ItemAddedToCart />
    </div>
  );
}

export default App;
