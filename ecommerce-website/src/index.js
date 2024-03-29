import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import CartContextProvider from "./components/store/CartContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutComponents from "./components/UI/About/AboutComponents";
import MusicComponent from "./components/UI/MusicComponent";
import HomeComponents from "./components/UI/Home/HomeComponents";
import Movies from "./components/Movies/Movies";
import ContactUsComponent from "./components/UI/ContactUs/ContactUsComponent";
import ProductDetail from "./components/UI/Pages/ProductDetail";
import LoginComponent from "./components/UI/Login/LoginComponent";
// import cartContext from "../../store/cart-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeComponents />,
      },
      {
        path: "/home",
        element: <HomeComponents />,
      },
      {
        path: "/about",
        element: <AboutComponents />,
      },
      {
        path: "/store",
        element: <MusicComponent />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/contactUs",
        element: <ContactUsComponent />,
      },
      {
        path: "/productDetails/:itemsString",
        element: <ProductDetail />,
      },
      {
        path: "/login",
        element: <LoginComponent />,
      },
    ],
  },
]);
root.render(
  <CartContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </CartContextProvider>
);
reportWebVitals();
