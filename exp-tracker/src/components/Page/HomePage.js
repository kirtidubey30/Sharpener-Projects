import React from "react";
import Header from "../Layout/Header";
import { useState } from "react";

function HomePage() {
  const [isProfileCompleteClicked, setProfileClickedVal] = useState(false);
  const profileCompletehandler = () => {
    setProfileClickedVal(true);
  };
  return (
    <>
      <Header profileCompletehandler={profileCompletehandler} />;
      {isProfileCompleteClicked && 
      <updatedProfile></updatedProfile>
      }
    </>
  );
}

export default HomePage;
