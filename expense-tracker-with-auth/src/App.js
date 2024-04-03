import React, { useContext } from "react";
import "./App.css";
import SignupScreen from "./components/SignupComp/SignupScreen";
import cartContext from "./components/store/cart-context";
import LoginScreen from "./components/LoginComp/LoginScreen";
import HomePage from "./components/Page/HomePage";

function App() {
  const eCtx = useContext(cartContext);
  return (
    <div className="App">
      <SignupScreen />
      {eCtx.isSignedUp && <LoginScreen />}
      {eCtx.isLoggedIn && <HomePage />}
    </div>
  );
}

export default App;
