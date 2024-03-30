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
      // Call the backend API to store cart items whenever the cart or user email is updated
      saveCartItemsToBackend();
    }
  }, [ectx.cartItem, ectx.userEmail]);
  const removeSpecialCharacters = (email) => {
    // Remove special characters (@ and .)
    return email.replace(/[.@]/g, "");
  };
  // const saveCartItemsToBackend = async () => {
  //   try {
  //     // Prepare the data to be sent to the backend
  //     const cartData = ectx.cartItem.map((item) => ({
  //       id: item.id,
  //       title: item.title,
  //       price: item.price,
  //       quantity: item.quantity,
  //     }));

  //     // Make the POST request to the backend API
  //     const response = await fetch(
  //       `https://crudcrud.com/api/ccf13201b7534ea488b9f00c864442d0/cart${removeSpecialCharacters(
  //         ectx.userEmail
  //       )}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(cartData),
  //       }
  //     );

  //     // Check if the request was successful
  //     if (!response.ok) {
  //       throw new Error("Failed to save cart items to backend");
  //     }
  //   } catch (error) {
  //     console.error("Error saving cart items to backend:", error.message);
  //     // You can add user-friendly error handling here
  //   }
  // };

  const saveCartItemsToBackend = async () => {
    try {
      // Prepare the data to be sent to the backend
      const cartData = ectx.cartItem.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      }));

      // Log the constructed URL
      const url = `https://crudcrud.com/api/ccf13201b7534ea488b9f00c864442d0/cart${removeSpecialCharacters(
        ectx.userEmail
      )}`;
      console.log("Backend URL:", url);

      // Make the POST request to the backend API
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Failed to save cart items to backend");
      }
    } catch (error) {
      console.error("Error saving cart items to backend:", error.message);
    }
  };
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
