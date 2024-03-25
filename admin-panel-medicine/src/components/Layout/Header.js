import React, { useState } from "react";
import classes from "./Header.module.css";
import cartContext from "../../store/cart-context";
import { useContext } from "react";

function Header(props) {
  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantityAvailable, setQuantityAvailable] = useState("");

  const medCtx = useContext(cartContext);

  const handleAddProduct = () => {
    const newItem = {
      id: medCtx.items.length + 1,
      name: medicineName,
      description: description,
      price: price,
      quantityAvailable: quantityAvailable,
    };
    medCtx.addItem(newItem);
    setMedicineName("");
    setDescription("");
    setPrice("");
    setQuantityAvailable("");
  };

  return (
    <>
      <div className={classes.mainHeader}>
        <span>
          <label>Medicine Name</label>
          <input
            type="text"
            value={medicineName}
            onChange={(event) => setMedicineName(event.target.value)}
          />
        </span>
        <span>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </span>
        <span>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </span>
        <span>
          <label>Quantity Available</label>
          <input
            type="number"
            value={quantityAvailable}
            onChange={(event) => setQuantityAvailable(event.target.value)}
          />
        </span>
        <button onClick={handleAddProduct}>Add To Product</button>
        <button onClick={() => props.onClickofViewCart()}>Your Cart</button>
      </div>
    </>
  );
}

export default Header;
