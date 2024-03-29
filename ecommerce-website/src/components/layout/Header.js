import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook
import cartContext from "../store/cart-context";

function Header(props) {
  const { setCartOpen } = props;
  const cartCtx = useContext(cartContext);

  const location = useLocation();
  const isHome = location.pathname === "/home";
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleStoreClick = () => {
    if (isLoggedIn) {
      window.location.href = "/store";
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <header>
      <ul>
        <li>
          <Link to="/home" className={classes.headersection}>
            HOME
          </Link>
        </li>
        <li>
          <button className={classes.storeTab} onClick={handleStoreClick}>
            STORE
          </button>
        </li>
        <li>
          <Link to="/about" className={classes.headersection}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/contactUs" className={classes.headersection}>
            CONTACT US
          </Link>
        </li>
        <li>
          <Link to="/login" className={classes.headersection}>
            {/* {isLoggedIn ? "PROFILE" : "LOGIN"} */}
            LOGIN
          </Link>
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
      {isHome && (
        <React.Fragment>
          <button className={classes["latest-album"]}>
            Get our Latest Album
          </button>
          <button className={classes["play-btn"]}>►</button>
        </React.Fragment>
      )}
    </header>
  );
}

export default Header;
