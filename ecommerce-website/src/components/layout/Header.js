import React from "react";
import classes from "./Header.module.css";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook

function Header(props) {
  const { setCartOpen } = props;
  const location = useLocation(); // Get the current location object
  const isHome = location.pathname === "/home";
  return (
    <header>
      <ul>
        <li>
          <Link
            to="/home"
            className={isHome ? "headersection active" : "headersection"}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link to="/store" className="headersection">
            STORE
          </Link>
        </li>
        <li>
          <Link to="/about" className="headersection">
            ABOUT
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
