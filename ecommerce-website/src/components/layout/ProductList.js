import React from "react";
import productsArr from "../Data/productsArr";
export const ProductList = () => {
  return (
    <div style={{ display: "flex" }}>
      {productsArr.map((item) => (
        <div id={item.id}>
          <span id={item.id}>
            {item.title} - Rs.{item.price}
          </span>
          <img src={item.imageUrl} alt="Layout images" />
        </div>
      ))}
    </div>
  );
};
