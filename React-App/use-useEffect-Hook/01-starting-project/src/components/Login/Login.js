import React, { useEffect, useReducer, useRef, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action?.val?.trim()?.length > 6 }; //for updating the value we used action property
  }
  if (action.type === "USER_BLUR") {
    return { value: state.value, isValid: state?.value?.trim()?.length > 6 }; //this is used to check the validation
  }
  return { value: "", isValid: false };
};
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "USER_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};
const clgNameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action?.value?.trim()?.length > 0 };
  }
  if (action.type === "USER_BLUR") {
    return { value: state.value, isValid: state?.value?.trim()?.length > 0 };
  }
  return { value: "", isValid: false };
};
const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [clgNameState, dispatchClgName] = useReducer(clgNameReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const clgNameInputRef = useRef();
  useEffect(() => {
    setFormIsValid(
      clgNameState?.value?.trim()?.length > 0 &&
        emailState?.value?.includes("@") &&
        passwordState?.value?.trim()?.length > 6
    );
  }, [emailState.value, passwordState.value, clgNameState.value]);

  const clgNameChangeHandler = (event) => {
    //setClgName(event.target.value);
    dispatchClgName({ type: "USER_INPUT", val: event.target.value });
  };
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const validateClgNameHandler = () => {
    dispatchClgName({ type: "USER_BLUR" });
  };
  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "USER_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: "USER_BLUR",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      props.onLogin(emailState.value, passwordState.value, clgNameState.value);
    } else if (emailState.isValid) {
      emailInputRef.current.activate();
    } else if (passwordState.isValid) {
      passwordInputRef.current.activate();
    } else if (clgNameState.isValid) {
      clgNameInputRef.current.activate();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-MAIL"
          type="email"
          value={emailState.value}
          isValid={emailState.isValid}
          onBlur={validateEmailHandler}
          onChange={emailChangeHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          value={passwordState.value}
          isValid={passwordState.isValid}
          onBlur={validatePasswordHandler}
          onChange={passwordChangeHandler}
        />
        <Input
          ref={clgNameInputRef}
          id="clgName"
          label="College Name"
          type="text"
          value={clgNameState.value}
          isValid={clgNameState.isValid}
          onBlur={validateClgNameHandler}
          onChange={clgNameChangeHandler}
        />
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
