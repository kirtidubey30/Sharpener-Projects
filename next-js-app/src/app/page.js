"use client";
import Layout from "@/components/layout/Layout";
import MeetupList from "@/components/meetups/MeetupList";

export default function Home() {
  const dummy_meetUps = [
    {
      id: "m1",
      title: "A First MeetUp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/429px-Altja_j%C3%B5gi_Lahemaal.jpg",
      address: "Lahemaa National Park in Estonia",
      description: "Lahemaa National Park in Estonia.",
    },
    {
      id: "m2",
      title: "A First MeetUp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/429px-Altja_j%C3%B5gi_Lahemaal.jpg",
      address: "Lahemaa National Park in Estonia",
      description: "Lahemaa National Park in Estonia.",
    },
  ];
  return (
    <Layout>
      <MeetupList meetups={dummy_meetUps} />
    </Layout>
  );
}
