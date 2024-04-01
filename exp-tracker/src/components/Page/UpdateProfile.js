import React, { useRef } from "react";
import classes from "./../Layout/Header.module.css";
function UpdateProfile(props) {
  const eneteredName = useRef();
  const eneteredUrl = useRef();

  const headerVal = "Winner never Quit , Quitters never win !!!";
  const profileStatusText =
    "Your Profile is 64% completed. A complete Profile has higher chances of Landing a jobincomplete";

  const idToken = localStorage.getItem("token");
  const oncCancelHandler = () => {
    eneteredName.current.value = "";
    eneteredUrl.current.value = "";
    props.profileCompletehandler(false);
  };
  const handleOnSubMitofUpdate = (event) => {
    event.preventDefault();
    if (
      eneteredName.current.value.length > 0 ||
      eneteredUrl.current.value.length > 0
    ) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAxzAIOBoHPU5htChQHAUapN3PH-NkYens",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: idToken,
            displayName: eneteredName.current.value,
            photoUrl: eneteredName.current.value,
            deleteAttribute: ["DISPLAY_NAME", "PHOTO_URL"],
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            console.log("User has successfully modified with data =", data);
            oncCancelHandler();
            window.alert("User has successfully modified.");
          });
          // setSignUpForm(false);
          // eCtx.setSignedUpVal(true);
        } else {
          res.json().then((data) => {
            console.log("Error Occured :", data.error.message);
            window.alert(data.error.message);
          });
        }
      });
    } else {
      window.alert("Please fill atleast one field to update");
    }
  };
  const handleVerifyEmail = (event) => {
    event.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAxzAIOBoHPU5htChQHAUapN3PH-NkYens",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
          requestType: "VERIFY_EMAIL",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log("Otp has been sent to =", data);
          oncCancelHandler();
          window.alert(
            "Otp has been succesfully sent to the registered email id"
          );
        });
        // setSignUpForm(false);
        // eCtx.setSignedUpVal(true);
      } else {
        res.json().then((data) => {
          let msg = "";
          console.log("Error Occured :", data.error.message);
          if (data.error.message === "INVALID_ID_TOKEN") {
            msg =
              "The user's credential is no longer valid. The user must sign in again";
          } else if (data.error.message === "USER_NOT_FOUND") {
            msg =
              "There is no user record corresponding to this identifier. The user may have been deleted.";
          }

          msg.length > 0 ? window.alert(msg) : window.alert(data.error.message);
        });
      }
    });
  };
  return (
    <div>
      <div className={classes.headerContainerFrmUpdate}>
        <span className={classes.headerText}>
          <span>{headerVal}</span>
          <span className={classes.completeNowCss}>
            {profileStatusText}
            <span style={{ cursor: "pointer" }}>
              <i>Complete Now</i>
            </span>
          </span>
        </span>
        <form>
          <div className={classes.contactDetails}>
            <h2>Contact details</h2>

            <button onClick={oncCancelHandler} type="cancel">
              Cancel
            </button>
          </div>
          <div className={classes.inputFieldContainer}>
            <span>
              <label>Full Name</label>
              <input type="text" ref={eneteredName} />
            </span>
            <span>
              <label>Profile Photo URL</label>
              <input type="text" ref={eneteredUrl} />
            </span>
            <div className={classes.btnContainer}>
              <button type="submit" onClick={handleOnSubMitofUpdate}>
                Update
              </button>
              <button type="verify" onClick={handleVerifyEmail}>
                verify Email id{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
