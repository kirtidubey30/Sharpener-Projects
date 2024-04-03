import React, { useRef } from "react";

function UpdateProfile() {
  const eneteredName = useRef();
  const eneteredUrl = useRef();
  const idToken =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJhNjI1OTZmNTJmNTJlZDQ0MDQ5Mzk2YmU3ZGYzNGQyYzY0ZjQ1M2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXV0aGZvcmV4cHRyYWNrZXIiLCJhdWQiOiJhdXRoZm9yZXhwdHJhY2tlciIsImF1dGhfdGltZSI6MTcxMTkzMjgxOSwidXNlcl9pZCI6Ik5sV2tIMTZQY2xiRTNIM3FObzRPaVNXeEtDejIiLCJzdWIiOiJObFdrSDE2UGNsYkUzSDNxTm80T2lTV3hLQ3oyIiwiaWF0IjoxNzExOTMyODE5LCJleHAiOjE3MTE5MzY0MTksImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhYmNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.AA9nf9DqgHag1gHDXcLFYdyd1mRsR-9qxShnNZugYt4QilfQn7WDJQJPRZp-tWnqI8PlVeXdMHVijd3oKlbb5BS2uickjnnua1uUB1OPXYSW96qIOFWtOyzgN7A9s7jFzjXxzR0B6eEPd2MYYsRsE6nm9Ci_mz0JsP-KbJFypePn4dwyx4kYoHtpdXtpTAxjpunfnyuqYFm5NpXFXu1SECZGEPwzGTfKqLdCcHt9MwByczzKl4Mam578RhERlXOlF3j-w6hEp4B99YptQ3YG9ZJdOZpnTPkOlEEDTN8r--hEy1r6flIsEMX4A8ShAU2IsF130ogfNq3XPOWugexY5g";
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
