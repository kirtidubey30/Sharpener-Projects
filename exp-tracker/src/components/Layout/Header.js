import React, { useContext } from "react";
import { useState } from "react";
import classes from "./Header.module.css";
import cartContext from "../store/cart-context";
function Header(props) {
  const [isupdateProfile, setUpdateProfileVal] = useState(false);
  const headerVal = "Wecome to Expense Tracker !!!";
  const profileStatusText = "Your Profile is incomplete";
  const token = localStorage.getItem("token");
  const eCtx = useContext(cartContext);
  const handleLogOut = (event) => {
    event.preventDefault();
    localStorage.setItem("token", "");
    eCtx.setIsLoggedIn(false);
    window.location = "/";
  };
  const handleCompleteNow = () => {
    props.profileCompletehandler(true);
    setUpdateProfileVal(true);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAxzAIOBoHPU5htChQHAUapN3PH-NkYens",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log("Fetched Data of the user =", data);
          // oncCancelHandler();
          window.alert("Fetched Data of the user");
        });
      } else {
        res.json().then((data) => {
          console.log("Error Occured :", data.error.message);
          window.alert(data.error.message);
        });
      }
    });
  };
  return (
    <div className={classes.headerContainer}>
      {!isupdateProfile && (
        <span className={classes.headerText}>
          <span>
            <h2>{headerVal}</h2>
          </span>
          <span className={classes.completeNowCss}>
            {profileStatusText}
            <span onClick={handleCompleteNow} style={{ cursor: "pointer" }}>
              <i>Complete Now</i>
            </span>
          </span>
          <button onClick={handleLogOut} className={classes.logOut}>
            LogOut
          </button>
        </span>
      )}
    </div>
  );
}

export default Header;
