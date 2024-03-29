import React, { useContext, useRef } from "react";
import classes from "./LoginComponent.module.css";
import cartContext from "../../store/cart-context";

function LoginComponent() {
  const enteredEmail = useRef();
  const enteredPass = useRef();
  // const location = useLocation();
  const logCtx = useContext(cartContext);
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(
      "inside submit handler where enteredEmail =" +
        enteredEmail +
        " and entered Pass =" +
        enteredPass
    );
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBOurc_9yCd6LlQnTsLhkhdKpI8HcOV_Bk",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail.current.value,
          password: enteredPass.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        console.log("successfully logged In ");
        window.location.replace("/");
        logCtx.setLogInInfo(true);
      } else {
        res.json().then((data) => {
          console.log("Error =", data.error.message);
          window.alert(data.error.message);
          logCtx.setLogInInfo(false);
        });
      }
    });
  };

  return (
    <div className={classes.formContainer}>
      <form onSubmit={submitHandler}>
        <h1>LOGIN FORM</h1>
        <span className={classes.formLabel}>
          <label>E-MAIL :</label>
          <input type="email" required ref={enteredEmail} />
        </span>
        <span className={classes.formLabel}>
          <label>PASSWORD :</label>
          <input type="password" required ref={enteredPass} />
        </span>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginComponent;
