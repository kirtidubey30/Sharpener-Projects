import React, { useRef } from "react";
import classes from "./SignupScreen.module.css";
function SignupScreen() {
  const enteredMail = useRef();
  const enteredPass = useRef();
  const handleOnSubmit = (event) => {
    event.preventDefault();
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
      } else {
        res.json().then((data) => {
          console.log("Error Occured :", data.error.message);
          window.alert(data.error.message);
        });
      }
    });
    enteredMail.current.value = "";
    enteredPass.current.value = "";
  };
  return (
    <div className={classes.formcontainer}>
      <form onSubmit={handleOnSubmit}>
        <h2>SIGNUP</h2>
        <div>
          <input type="email" placeholder="Email" ref={enteredMail} required />
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
  );
}

export default SignupScreen;
