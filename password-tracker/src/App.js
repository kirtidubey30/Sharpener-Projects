import "./App.css";
import Header from "./components/Layout/Header";
import ItemsAdded from "./components/Layout/ItemsAdded";
import { useState } from "react";

function App() {
  const [editItem, setEditItem] = useState("");
  const handleEditItem = (item) => {
    setEditItem(item);
  };
  return (
    <div className="App">
      <Header editItem={editItem} />
      <ItemsAdded handleEditItem={handleEditItem} />
    </div>
  );
}

export default App;
