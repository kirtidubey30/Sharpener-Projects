import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
function Cart(props) {
  const cartItems = (
    <ul className="">
      {[
        {
          id: 10,
          name: "Avocado Toast",
          price: 50,
        },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      <div>cartItems</div>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>50</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["btn-alt"]}>Close</button>
        <button className={classes.btn}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
