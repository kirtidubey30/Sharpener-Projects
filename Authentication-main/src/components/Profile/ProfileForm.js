import { useContext, useEffect, useRef } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/AuthContext";

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  const newPass = useRef();

  function submitHandler(event) {
    event.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBOurc_9yCd6LlQnTsLhkhdKpI8HcOV_Bk",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newPass.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        const data = res.json();
        console.log("succefully updated data =", data);
      } else {
        res.json().then((data) => {
          console.log("Error =", data.error.message);
          window.alert(data.error.message);
        });
      }
    });
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPass} />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
