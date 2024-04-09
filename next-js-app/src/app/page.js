"use client";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

export default function Home() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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
        }));
        setMeetups(updatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <MeetupList meetups={meetups} />
    </Layout>
  );
}
