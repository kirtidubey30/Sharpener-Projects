import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import CartContextProvider from "./components/store/CartContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/layout/Header";
import AboutComponents from "./components/UI/About/AboutComponents";
import MusicComponent from "./components/UI/MusicComponent";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Header />,
      },
      {
        path: "/about",
        element: <AboutComponents />,
      },
      {
        path: "/store",
        element: <MusicComponent />,
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
