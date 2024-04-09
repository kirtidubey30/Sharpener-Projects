"use client";
import MeetupsDetails from "../../components/meetups/MeetupsDetails";
import React from "react";

function MeetupDetail() {
  return (
    <MeetupsDetails
      title="A First MeetUp"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/429px-Altja_j%C3%B5gi_Lahemaal.jpg"
      address="Lahemaa National Park in Estonia"
      description="Lahemaa National Park in Estonia."
    />
  );
}

export default MeetupDetail;
