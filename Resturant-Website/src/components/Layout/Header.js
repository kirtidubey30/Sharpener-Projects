import React, { useContext, useEffect, useState } from "react";
import bgImage from "../../assets/Resturant-BgImage.png";
import icon from "../../assets/ShoppingIcon.png";
import styles from "./Header.module.css";
import CartContext from "../../store/cart-context";

function Header(props) {
  const cartCtx = useContext(CartContext);
  const [numOfCartItems, setNumOfCartItems] = useState(0);

  useEffect(() => {
    console.log("cartCtx from header =", cartCtx);
    setNumOfCartItems(cartCtx.items.length);
  }, [cartCtx]);

  const clickCartHandler = (isFromCloseBtn) => {
    props.onClickofViewCart(isFromCloseBtn);
  };

  return (
    <>
      <header>
        <div>React Meals</div>
        <button onClick={() => clickCartHandler(false)}>
          <img src={icon} alt="ShoppingCartIcon" />
          Your Cart
          <div className={styles.cartItems}>{numOfCartItems}</div>
        </button>
      </header>
      <section className={styles.bgImg}>
        <div className={styles.overlay}>
          <h3>Delicious Food , Delivered To You</h3>
          <span>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </span>
          <br />
          <span>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </span>
        </div>
        <img src={bgImage} alt="RestaurantWebsite" />
      </section>
    </>
  );
}

export default Header;
