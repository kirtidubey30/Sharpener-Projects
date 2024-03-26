import React from "react";
import cartElements from "../Data/cartElements";

function ItemAddedToCart() {
  return (
    <div className="cartItems">
      <h3>Cart Items</h3>
      {cartElements.map((item) => (
        <span id={item.id}>
          <img src={item.imageUrl} />
          {item.title}
          {item.price}
          {item.quantity}
        </span>
      ))}
    </div>
  );
}

export default ItemAddedToCart;
