import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import cartContext from "../../store/cart-context";
function Cart(props) {
  const { items } = useContext(CartContext);
  const cartCtx = useContext(cartContext);
  const clickCartHandler = (isFromCloseBtn) => {
    props.onClickofViewCart(isFromCloseBtn);
  };
  const calCulateTotalPrice = (items) => {
    if (items.length) {
      return items.reduce((total, item) => {
        return total + item.amount * item.price;
      }, 0);
    } else {
      return 0;
    }
  };
  return (
    <Modal>
      <div>cartItems</div>
      <div className={classes.cartContainer}>
        <ul className={classes.cartItems}>
          {items.length > 0 &&
            items.map((item) => (
              <li key={item.id} className={classes.listOfItems}>
                <span>{`${item.title} -`}</span>
                <span className={classes.itemDetails}>
                  Price : ${item.price} - Amount :{" "}
                  <input value={`x ${item.amount}`} readOnly />
                  <span className={classes.addremoveBtn}>
                    <button
                      onClick={() => cartCtx.removeItem(item.id)}
                      className={classes.removeBtn}
                    >
                      -
                    </button>
                    <button
                      onClick={() => cartCtx.addItem(item)}
                      className={classes.addBtn}
                    >
                      +
                    </button>
                  </span>
                </span>
              </li>
            ))}
        </ul>
      </div>

      <div className={classes.total}>
        <span>Total amount :</span>
        <span>${calCulateTotalPrice(items)}</span>
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
