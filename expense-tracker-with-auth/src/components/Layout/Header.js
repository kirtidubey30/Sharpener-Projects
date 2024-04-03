import React, { useEffect } from "react";
import { useState } from "react";

function Header(props) {
  const [isupdateProfile, setUpdateProfileVal] = useState(false);
  const headerVal = "";
  const profileStatusText = "";
  const handleCompleteNow = () => {
    props.profileCompletehandler();
    setUpdateProfileVal(true);
  };
  useEffect(() => {
    if (!isupdateProfile) {
      headerVal = "Wecome to Expense Tracker !!!";
      profileStatusText = "Your Profile is incomplete";
    } else {
      headerVal = "Winner never Quit , Quitters never win !!!";
      profileStatusText =
        "Your Profile is 64% completed. A complete Profile has higher chances of Landing a jobincomplete";
    }
  });
  return (
    <div>
      <span>{headerVal}</span>
      <span>
        {profileStatusText}
        <span onClick={handleCompleteNow}>Complete Now</span>
      </span>
    </div>
  );
}

export default Header;
