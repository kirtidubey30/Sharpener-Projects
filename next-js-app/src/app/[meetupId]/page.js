"use client";
import MeetupsDetails from "../../components/meetups/MeetupsDetails";
import React, { useEffect, useState } from "react";

function MeetupDetail() {
  const meetUpId = localStorage.getItem("selectedMeetUpId");
  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    const getDetailsOfMeetUp = async () => {
      try {
        const res = await fetch("/api/fetch-meetups", {
          method: "GET",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const dataObj = await res.json();

        const updatedData = dataObj.data.map((item) => ({
          id: item._id,
          image: item.image,
          title: item.title,
          address: item.address,
          description: item.description,
        }));

        // Find the meetup with the matching ID
        const selectedMeetUp = updatedData.filter(
          (meetup) => meetup.id === meetUpId
        );

        setMeetup(selectedMeetUp);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getDetailsOfMeetUp();
  }, [meetUpId]); // Add meetUpId as a dependency

  if (!meetup?.[0].length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <MeetupsDetails
      title={meetup?.[0]?.title}
      image={meetup?.[0]?.image}
      address={meetup?.[0]?.address}
      description={meetup?.[0]?.description}
    />
  );
}

export default MeetupDetail;
