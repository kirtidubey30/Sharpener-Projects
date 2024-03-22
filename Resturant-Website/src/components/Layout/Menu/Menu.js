import React from "react";
import response from "../../Meals/Meals.js";
import styles from "./Menu.module.css";
function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.menus}>
        {response.map((items) => (
          <span className={styles.parentItemMenu} key={items.id}>
            <img src={items.image} alt="cart-Menu" />
            <h2>{items.title}</h2>
            <p>{items.description}</p>
            <p>
              <b>${items.price}</b>
            </p>
            <span className={styles.addToCart}>
              <span>
                <label>Amount</label>
                <input value="1" readOnly />
              </span>
              <button>+ &nbsp; Add</button>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Menu;
