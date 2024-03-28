import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const enteredEmail = useRef();
  const enteredPass = useRef();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const [msg, setMsg] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (isLogin) {
      //extsting user
    } else {
      //call the api to create new user
      setMsg("Sending Request...");
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBOurc_9yCd6LlQnTsLhkhdKpI8HcOV_Bk",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail.current.value,
            password: enteredPass.current.value,
            returnSecureToken: true,
          }),
          "Content-Type": "application/json",
        }
      ).then((res) => {
        if (res.ok) {
          //successfull
          setMsg("");
          console.log("Successfull");
        } else {
          res.json().then((data) => {
            setMsg("");
            console.log("Error =", data);
            window.alert(data.error.message);
          });
        }
      });
    }
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={enteredEmail} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={enteredPass} />
        </div>
        <div className={classes.createAcc}>
          <button
            type="button"
            className={classes.toggle}
            onClick={submitHandler}
          >
            {!isLogin ? `Create Account` : `Login`}
          </button>
        </div>

        {msg.length > 0 && <p style={{ color: "white" }}>{msg}</p>}
        <div className={classes.actions}>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
