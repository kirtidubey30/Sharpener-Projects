import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import CartContextProvider from "./store/CartContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);
