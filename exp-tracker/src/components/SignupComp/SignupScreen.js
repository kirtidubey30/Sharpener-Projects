import React, { useContext, useRef, useState } from "react";
import classes from "./SignupScreen.module.css";
import cartContext from "../store/cart-context";
function SignupScreen() {
  const enteredMail = useRef();
  const enteredPass = useRef();
  const [isSignUpFormOpen, setSignUpForm] = useState(true);
  const eCtx = useContext(cartContext);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (
      enteredMail.current.value.length > 0 &&
      enteredPass.current.value.length > 0
    ) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAxzAIOBoHPU5htChQHAUapN3PH-NkYens",
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
          console.log("User has successfully signed up.");
          window.alert("User has successfully signed up.");
          setSignUpForm(false);
          eCtx.setSignedUpVal(true);
        } else {
          res.json().then((data) => {
            console.log("Error Occured :", data.error.message);
            window.alert(data.error.message);

            eCtx.setSignedUpVal(false);
          });
        }
      });
    }
    enteredMail.current.value = "";
    enteredPass.current.value = "";
  };
  return (
    <>
      {isSignUpFormOpen && (
        <div className={classes.formcontainer}>
          <form onSubmit={handleOnSubmit}>
            <h2>SIGNUP</h2>
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
              <button type="submit">Signup</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default SignupScreen;
