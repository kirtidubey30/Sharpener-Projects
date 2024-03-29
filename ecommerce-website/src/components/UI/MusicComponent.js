import React, { useContext, useEffect } from "react";
import productsArr from "../Data/productsArr";
import classes from "./MusicComponent.module.css";
import cartContext from "../store/cart-context";
import { Link } from "react-router-dom";
const MusicComponent = () => {
  const ectx = useContext(cartContext);
  useEffect(() => {
    console.log("ectx from MusicComponent =", ectx);
  }, ectx);
  return (
    <section id="music" className={classes.container}>
      <h2>MUSIC</h2>
      <div id="music-content" className={classes["music-content"]}>
        {productsArr.map((item, index) => (
          <div key={item.id}>
            <h3>Album &nbsp;{index + 1}</h3>

            <Link
              to={`/productDetails/${encodeURIComponent(JSON.stringify(item))}`}
            >
              <div className={classes["image-container"]}>
                <img
                  className={classes["prod-images"]}
                  src={item.imageUrl}
                  alt=""
                />
              </div>
            </Link>
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
