// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import "bootstrap/dist/css/bootstrap.css";
// import CartContextProvider from "./components/store/CartContextProvider";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AboutComponents from "./components/UI/About/AboutComponents";
// import MusicComponent from "./components/UI/MusicComponent";
// import HomeComponents from "./components/UI/Home/HomeComponents";
// import Movies from "./components/Movies/Movies";
// import ContactUsComponent from "./components/UI/ContactUs/ContactUsComponent";
// import ProductDetail from "./components/UI/Pages/ProductDetail";
// import LoginComponent from "./components/UI/Login/LoginComponent";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <HomeComponents />,
//       },
//       {
//         path: "/home",
//         element: <HomeComponents />,
//       },
//       {
//         path: "/about",
//         element: <AboutComponents />,
//       },
//       {
//         path: "/store",
//         element: <MusicComponent />,
//       },
//       {
//         path: "/movies",
//         element: <Movies />,
//       },
//       {
//         path: "/contactUs",
//         element: <ContactUsComponent />,
//       },
//       {
//         path: "/productDetails/:itemsString",
//         element: <ProductDetail />,
//       },
//       {
//         path: "/login",
//         element: <LoginComponent />,
//       },
//     ],
//   },
// ]);
// root.render(
//   <CartContextProvider>
//     <React.StrictMode>
//       <RouterProvider router={router} />
//     </React.StrictMode>
//   </CartContextProvider>
// );
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import CartContextProvider from "./components/store/CartContextProvider";
import AboutComponents from "./components/UI/About/AboutComponents";
import MusicComponent from "./components/UI/MusicComponent";
import HomeComponents from "./components/UI/Home/HomeComponents";
import Movies from "./components/Movies/Movies";
import ContactUsComponent from "./components/UI/ContactUs/ContactUsComponent";
import ProductDetail from "./components/UI/Pages/ProductDetail";
import LoginComponent from "./components/UI/Login/LoginComponent";
// import AuthContext from "./components/store/AuthContext";
import AuthContext from "./components/store/cart-context";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomeComponents /> },
      { path: "/home", element: <HomeComponents /> },
      { path: "/about", element: <AboutComponents /> },
      { path: "/store", element: <MusicComponentGuarded /> }, // Use guarded component for store route
      { path: "/movies", element: <Movies /> },
      { path: "/contactUs", element: <ContactUsComponent /> },
      { path: "/productDetails/:itemsString", element: <ProductDetail /> },
      { path: "/login", element: <LoginComponent /> },
    ],
  },
]);

// MusicComponentGuarded checks if the user is logged in before rendering MusicComponent
function MusicComponentGuarded() {
  const authCtx = React.useContext(AuthContext);

  // Redirect to login if user is not logged in
  if (!authCtx.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <MusicComponent />;
}

// Render the app with CartContextProvider and RouterProvider
root.render(
  <CartContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </CartContextProvider>
);

reportWebVitals();
