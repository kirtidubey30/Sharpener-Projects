import React, { useContext } from "react";
import productsArr from "../Data/productsArr";
import classes from "./MusicComponent.module.css";
import cartContext from "../store/cart-context";
const MusicComponent = () => {
  const ectx = useContext(cartContext);
  return (
    <section id="music" className={classes.container}>
      <h2>MUSIC</h2>
      <div id="music-content" className={classes["music-content"]}>
        {productsArr.map((item, index) => (
          <div key={item.id}>
            <h3>Album &nbsp;{index + 1}</h3>
            <div className={classes["image-container"]}>
              <img
                className={classes["prod-images"]}
                src={item.imageUrl}
                alt=""
              />
            </div>
            <div className={classes["prod-details"]}>
              <span>
                $<span>{item.price}</span>
              </span>
              <button
                className={classes["shop-item-button"]}
                type="button"
                onClick={() => ectx.addItem(item)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MusicComponent;
