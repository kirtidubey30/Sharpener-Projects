import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CartContextProvider from "./components/store/CartContextProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignupScreen from "./components/SignupComp/SignupScreen";
import LoginScreen from "./components/LoginComp/LoginScreen";
import HomePage from "./components/Page/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/signup",
        element: <SignupScreen />,
      },
      {
        path: "/login",
        element: <LoginScreen />,
      },

      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
]);
root.render(
  // <CartContextProvider>
  //   <React.StrictMode>
  //     <RouterProvider router={router} />
  //   </React.StrictMode>
  // </CartContextProvider>
  <CartContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CartContextProvider>
);

reportWebVitals();
