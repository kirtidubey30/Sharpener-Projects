"use client";
import React from "react";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Layout from "@/components/layout/Layout";
function NewMeetupPage() {
  const handleonAddMeetup = (eneteredData) => {
    console.log("enteredData in New MeetUp form =", eneteredData);
  };
  return (
    <Layout>
      <NewMeetupForm onAddMeetup={handleonAddMeetup} />
    </Layout>
  );
}

export default NewMeetupPage;
