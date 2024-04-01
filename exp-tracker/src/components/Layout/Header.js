import React from "react";
import { useState } from "react";
import classes from "./Header.module.css";
function Header(props) {
  const [isupdateProfile, setUpdateProfileVal] = useState(false);
  const headerVal = "Wecome to Expense Tracker !!!";
  const profileStatusText = "Your Profile is incomplete";
  const token = localStorage.getItem("token");
  const handleCompleteNow = () => {
    props.profileCompletehandler(true);
    setUpdateProfileVal(true);
    //callApi

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAxzAIOBoHPU5htChQHAUapN3PH-NkYens",
      {
        method: "GET",
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
          <span>{headerVal}</span>
          <span className={classes.completeNowCss}>
            {profileStatusText}
            <span onClick={handleCompleteNow} style={{ cursor: "pointer" }}>
              <i>Complete Now</i>
            </span>
          </span>
        </span>
      )}
    </div>
  );
}

export default Header;
