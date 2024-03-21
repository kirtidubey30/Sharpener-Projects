import React from "react";
import bgImage from "../../assets/Resturant-BgImage.png";
import icon from "../../assets/ShoppingIcon.png";
import styles from "./Header.module.css";
function Header() {
  return (
    <>
      <header>
        <div>React Meals</div>
        <button>
          <img src={icon} />
          Your Cart
          <div className={styles.cartItems}>0</div>
        </button>
      </header>
      <section>
        <img src={bgImage} alt="background" />
      </section>
    </>
  );
}

export default Header;
