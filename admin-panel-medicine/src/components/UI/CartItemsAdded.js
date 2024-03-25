import React, { useContext } from "react";
import classes from "./CartItemsAdded.module.css";
import cartContext from "../../store/cart-context";

function CartItemsAdded() {
  const medCtx = useContext(cartContext);

  const onAddItemClick = (item) => {
    medCtx.addItem(item);
  };

  return (
    <div className={classes.cartsDiv}>
      {medCtx.cartItems.map((medicine) => (
        <div key={medicine.id}>
          <span>
            Name: {medicine.name} - Price: {medicine.price} - Description:
            {medicine.description} - Left: {medicine.quantityAvailable} -
            Amount: {medicine.amount}
            {medicine.quantityAvailable === 0 && (
              <button disabled>Out of stock</button>
            )}
            {medicine.quantityAvailable > 0 && (
              <button onClick={() => onAddItemClick(medicine)}>
                Add To cart
              </button>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

export default CartItemsAdded;
