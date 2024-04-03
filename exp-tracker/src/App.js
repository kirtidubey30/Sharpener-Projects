import "./App.css";
import { useContext } from "react";
import cartContext from "../src/components/store/cart-context";
import SignupScreen from "./components/SignupComp/SignupScreen";
import LoginScreen from "./components/LoginComp/LoginScreen";
import HomePage from "./components/Page/HomePage";

function App() {
  const eCtx = useContext(cartContext);
  const handleOnClickLogin = () => {
    eCtx.setSignedUpVal(true);
  };
  const handleOnClickSignUp = () => {
    eCtx.setIsLoggedIn(false);
    // eCtx.setSignedUpVal(true);
    window.location.assign("/");
  };
  return (
    <div className="App">
      <SignupScreen handleOnClickLogin={handleOnClickLogin} />

      {eCtx.isSignedUp && (
        <LoginScreen handleOnClickSignUp={handleOnClickSignUp} />
      )}
      {eCtx.isLoggedIn && <HomePage />}
    </div>
  );
}

export default App;
