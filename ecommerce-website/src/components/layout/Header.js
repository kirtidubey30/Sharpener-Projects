import React from "react";
import classes from "./Header.module.css";
function Header(props) {
  const { setCartOpen } = props;
  return (
    <header>
      <ul>
        <li>
          <a href="./index.html">HOME</a>
        </li>
        <li>
          <a href="/store">STORE</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
        <a
          href="#cart"
          className={classes["cart-holder"]}
          onClick={() => setCartOpen(true)}
        >
          cart<span className={classes["cart-number"]}>1</span>
        </a>
      </ul>
      <h1>The Generics</h1>
    </header>
  );
}

export default Header;
