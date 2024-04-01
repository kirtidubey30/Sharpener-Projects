import React from "react";
import Header from "../Layout/Header";
import { useState } from "react";
import UpdateProfile from "./UpdateProfile";

function HomePage() {
  const [isProfileCompleteClicked, setProfileClickedVal] = useState(false);
  const profileCompletehandler = (val) => {
    setProfileClickedVal(val);
  };
  return (
    <>
      {!isProfileCompleteClicked && (
        <Header profileCompletehandler={profileCompletehandler} />
      )}
      {isProfileCompleteClicked && (
        <UpdateProfile profileCompletehandler={profileCompletehandler} />
      )}
    </>
  );
}

export default HomePage;
