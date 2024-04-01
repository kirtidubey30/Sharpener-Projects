import React, { useRef } from "react";

function UpdateProfile() {
  const eneteredName = useRef();
  const eneteredUrl = useRef();

  const headerVal = "Winner never Quit , Quitters never win !!!";
  const profileStatusText =
    "Your Profile is 64% completed. A complete Profile has higher chances of Landing a jobincomplete";

  const idToken = localStorage.getItem("token");
  console.log("idToken from UpdateProfile =", idToken);
  const handleOnSubMitofUpdate = (event) => {
    event.preventDefault();
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
        res.json.then((data) => {
          console.log("User has successfully modified with data =", data);
          window.alert("User has successfully modified.");
        });
        // setSignUpForm(false);
        // eCtx.setSignedUpVal(true);
      } else {
        res.json().then((data) => {
          console.log("Error Occured :", data.error.message);
          window.alert(data.error.message);

          // eCtx.setSignedUpVal(false);
        });
      }
    });
  };
  return (
    <div>
      <span>
        <span>{headerVal}</span>
        <span>
          {profileStatusText}
          <span>Complete Now</span>
        </span>
      </span>
      <form onSubmit={() => handleOnSubMitofUpdate}>
        <div>
          <h2>Contact details</h2>

          <button>Cancel</button>
        </div>
        <div>
          <span>
            <label>Full Name</label>
            <input type="text" ref={eneteredName} />
          </span>
          <span>
            <label>Profile Photo URL</label>
            <input type="text" ref={eneteredUrl} />
          </span>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfile;
