"use client";
import React from "react";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Layout from "@/components/layout/Layout";
function NewMeetupPage() {
  const handleonAddMeetup = async (eneteredData) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(eneteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("data added from New MeetUp form =", data);
  };
  return (
    <Layout>
      <NewMeetupForm onAddMeetup={handleonAddMeetup} />
    </Layout>
  );
}

export default NewMeetupPage;
