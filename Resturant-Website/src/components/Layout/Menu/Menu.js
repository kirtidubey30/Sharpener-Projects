import React, { useContext, useState } from "react";
import response from "../../Meals/Meals.js";
import styles from "./Menu.module.css";
import cartContext from "../../../store/cart-context.js";

function Menu(props) {
  // State to track the amount of each item
  const [itemAmounts, setItemAmounts] = useState({});
  const cartCtx = useContext(cartContext);

  // Function to handle adding an item to the cart
  const onAddItemClick = (item) => {
    // Update the amount of the clicked item
    const updatedAmounts = {
      ...itemAmounts,
      [item.id]: (itemAmounts[item.id] || 0) + 1,
    };
    setItemAmounts(updatedAmounts);
    props.handleonAddItem({ ...item, amount: updatedAmounts[item.id] });
  };

  return (
    <div className={styles.container}>
      <div className={styles.menus}>
        {response.map((item) => {
          const cartItem = cartCtx.items.find(
            (cartItem) => cartItem.id === item.id
          );
          const cartItemAmount = cartItem ? cartItem.amount : 0;
          return (
            <span className={styles.parentItemMenu} key={item.id}>
              <img src={item.image} alt="cart-Menu" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>
                <b>${item.price}</b>
              </p>
              <span className={styles.addToCart}>
                <span>
                  <label>Amount</label>
                  <input
                    value={cartItemAmount || itemAmounts[item.id] || 0}
                    readOnly
                  />
                </span>
                <button onClick={() => onAddItemClick(item)}>
                  + &nbsp; Add
                </button>
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
