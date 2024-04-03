import React, { useEffect, useRef, useState } from "react";
import classes from "./LoginScreen.module.css";
import { useContext } from "react";
import cartContext from "../store/cart-context";

function LoginScreen() {
  const enteredMail = useRef();
  const enteredPass = useRef();
  const eCtx = useContext(cartContext);
  const [isLoginFormOpen, setLoginForm] = useState(true);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (
      enteredMail.current.value.length > 0 &&
      enteredPass.current.value.length > 0
    ) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAxzAIOBoHPU5htChQHAUapN3PH-NkYens",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredMail.current.value,
            password: enteredPass.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          // succesfully signed up
          console.log("User has successfully Loginned .");
          res.json().then((data) => {
            localStorage.setItem("token", data?.idToken);
            setLoginForm(false);
            eCtx.setIsLoggedIn(true);
          });
          window.alert("User has successfully Loginned.");
        } else {
          res.json().then((data) => {
            console.log("Error Occured :", data.error.message);
            eCtx.setIsLoggedIn(false);
            window.alert(data.error.message);
          });
        }
      });
    }
    enteredMail.current.value = "";
    enteredPass.current.value = "";
  };
  return (
    <>
      {isLoginFormOpen && (
        <div className={classes.formcontainer}>
          <form onSubmit={handleOnSubmit}>
            <h2> LOGIN </h2>
            <div>
              <input
                type="email"
                placeholder="Email"
                ref={enteredMail}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                ref={enteredPass}
                required
              />
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default LoginScreen;
