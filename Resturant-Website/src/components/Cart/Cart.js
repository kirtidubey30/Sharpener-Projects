import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
function Cart(props) {
  const { items, totalItems, addItem, removeItem } = useContext(CartContext);
  const clickCartHandler = (isFromCloseBtn) => {
    props.onClickofViewCart(isFromCloseBtn);
  };
  return (
    <Modal>
      <div>cartItems</div>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalItems}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["btn-alt"]}
          onClick={() => clickCartHandler(true)}
        >
          Close
        </button>
        <button className={classes.btn}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
