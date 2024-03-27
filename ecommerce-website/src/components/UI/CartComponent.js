import React, { useContext, useState } from "react";
import classes from "./CartComponent.module.css";
import { useEffect } from "react";
import cartContext from "../store/cart-context";
function CartComponent(props) {
  const { setCartOpen } = props;
  const [totalVal, setTotalVal] = useState(0);
  const ectx = useContext(cartContext);
  const calculateTotalVal = () => {
    if (ectx && ectx.cartItem.length > 0) {
      const totalPrice = ectx.cartItem.reduce((total, curr) => {
        return total + curr.quantity * curr.price;
      }, 0);
      setTotalVal(totalPrice);

      return totalVal;
    }
  };
  useEffect(() => {
    if (ectx.cartItem.length > 0) {
      calculateTotalVal();
    }
  }, [ectx.cartItem]);

  return (
    <section
      id="cart"
      className={`${classes.cart} container`}
      style={{ display: "block" }}
    >
      <h2>CART</h2>
      <button className={classes.cancel} onClick={() => setCartOpen(false)}>
        X
      </button>
      <div className={`${classes["cart-row"]} ${classes["cart-header"]}`}>
        <span className={`${classes["cart-item"]} ${classes["cart-column"]}`}>
          ITEM
        </span>
        <span className={`${classes["cart-price"]} ${classes["cart-column"]}`}>
          PRICE
        </span>
        <span
          className={`${classes["cart-quantity"]} ${classes["cart-column"]}`}
        >
          QUANTITY
        </span>
      </div>
      {ectx.cartItem.length > 0 &&
        ectx.cartItem.map(
          (cartItem) =>
            cartItem.quantity > 0 && (
              <div className={classes["cart-items"]} key={cartItem.id}>
                <div className={classes["cart-row"]}>
                  <span
                    className={`${classes["cart-item"]} ${classes["cart-column"]}`}
                  >
                    <img
                      className={classes["cart-img"]}
                      src={cartItem.imageUrl}
                      alt=""
                    />
                    <span>{cartItem.title}</span>
                  </span>
                  <span
                    className={`${classes["cart-price"]} ${classes["cart-column"]}`}
                  >
                    ${cartItem.price}
                  </span>
                  <span
                    className={`${classes["cart-quantity"]} ${classes["cart-column"]}`}
                  >
                    <input type="text" value={cartItem.quantity} readOnly />
                    <button onClick={() => ectx.removeItem(cartItem.id)}>
                      REMOVE
                    </button>
                  </span>
                </div>
              </div>
            )
        )}
      <div className={classes["cart-total"]}>
        <span>
          <span className={classes["total-title"]}>
            {" "}
            <strong>Total</strong>
          </span>
          $<span id="total-value">{totalVal}</span>
        </span>
      </div>
      <button className={classes["purchase-btn"]} type="button">
        PURCHASE
      </button>
    </section>
  );
}

export default CartComponent;
