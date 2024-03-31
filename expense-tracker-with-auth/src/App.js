import { useContext, useEffect, useState } from "react";
import "./App.css";
import SignupScreen from "./components/SignupComp/SignupScreen";
import cartContext from "./components/store/cart-context";
import LoginScreen from "./components/LoginComp/LoginScreen";
import HomePage from "./components/Page/HomePage";

function App() {
  const eCtx = useContext(cartContext);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsSignedUp(eCtx.isSignedUp);
    setIsLoggedIn(eCtx.isLoggedIn);
  }, [eCtx]);
  useEffect(() => {
    console.log("val of eCtx from App.js =", eCtx);
  }, [eCtx.isLoggedIn, eCtx.isSignedUp]);
  return (
    <div className="App">
      <SignupScreen />
      {isSignedUp && <LoginScreen />}
      {isLoggedIn && <HomePage />}
    </div>
  );
}

export default App;
