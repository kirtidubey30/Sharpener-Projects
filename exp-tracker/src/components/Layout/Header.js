import React, { useEffect } from "react";
import { useState } from "react";
import UpdateProfile from "../Page/UpdateProfile";

function Header(props) {
  const [isupdateProfile, setUpdateProfileVal] = useState(false);
  const headerVal = "Wecome to Expense Tracker !!!";
  const profileStatusText = "Your Profile is incomplete";
  const handleCompleteNow = () => {
    props.profileCompletehandler();
    setUpdateProfileVal(true);
  };
  return (
    <div>
      {!isupdateProfile && (
        <span>
          <span>{headerVal}</span>
          <span>
            {profileStatusText} &nbsp;
            <span onClick={handleCompleteNow} style={{ cursor: "pointer" }}>
              <i>Complete Now</i>
            </span>
          </span>
        </span>
      )}

      {isupdateProfile && <UpdateProfile />}
    </div>
  );
}

export default Header;
