import React, { useEffect, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [clgName, setClgName] = useState("");
  const [clgNameIsValid, setClgNameIsValid] = useState();
  const clgNameChangeHandler = (event) => {
    setClgName(event.target.value);
    setFormIsValid(
      event.target.value.trim().length > 0 &&
        enteredEmail.includes("@") &&
        enteredPassword.trim().length > 6
    );
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      clgName.trim().length > 0 &&
        event.target.value.includes("@") &&
        enteredPassword.trim().length > 6
    );
  };

  const validateClgNameHandler = () => {
    setClgNameIsValid(clgName.trim().length > 0);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      clgName.trim().length > 0 &&
        enteredEmail.includes("@") &&
        event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            clgNameIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="clgName">College Name</label>
          <input
            type="text"
            id="clgName"
            value={clgName}
            onChange={clgNameChangeHandler}
            onBlur={validateClgNameHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
