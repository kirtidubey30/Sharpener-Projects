import React from "react";
import bgImage from "../../assets/Resturant-BgImage.png";
import icon from "../../assets/ShoppingIcon.png";
import styles from "./Header.module.css";
function Header(props) {
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
          <div className={styles.cartItems}>0</div>
        </button>
      </header>
      <section className={styles.bgImg}>
        <div className={styles.overlay}>
          <h3>Delicious Food , Delivered To You</h3>
          <span>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </span>
          <br></br>
          <span>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </span>
        </div>
        <img src={bgImage} alt="ResturantWebsite" />
      </section>
    </>
  );
}

export default Header;
