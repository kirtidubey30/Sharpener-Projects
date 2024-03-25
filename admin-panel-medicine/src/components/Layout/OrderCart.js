import React, { useContext } from "react";
import Modal from "../UI/Modal";
import cartContext from "../../store/cart-context";
import classes from "./OrderCart.module.css";

function OrderCart(props) {
  const medCtx = useContext(cartContext);
  const OrderPlaced = () => {
    window.alert("Ordered Successfully");
  };
  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = (items) => {
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
      <div>Cart items</div>
      <div>
        <ul>
          {medCtx.cartItems.map(
            (med) =>
              med.amount > 0 && (
                <li key={med.id} className={classes.listOfItems}>
                  <span>{`Medicine Name: ${med.name} -`}</span>
                  <span className={classes.itemDetails}>
                    Price : ${med.price} - Amount :
                    <input value={`x ${med.amount}`} readOnly />
                    <span className={classes.addremoveBtn}>
                      <button
                        onClick={() => medCtx.removeItem(med.id)}
                        className={classes.removeBtn}
                      >
                        -
                      </button>
                      <button
                        onClick={() => medCtx.addItem(med)}
                        className={classes.addBtn}
                      >
                        +
                      </button>
                    </span>
                  </span>
                </li>
              )
          )}
        </ul>
      </div>

      <div className={classes.total}>
        <span>Total amount :</span>
        <span>${calculateTotalPrice(medCtx.cartItems)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCloseHandler} className={classes["btn-alt"]}>
          Close
        </button>
        <button className={classes.btn} onClick={OrderPlaced}>
          Order
        </button>
      </div>
    </Modal>
  );
}

export default OrderCart;
