"use client";
import React from "react";

function DetailPage({ params }) {
  // const router = useRouter();
  const details = [
    {
      id: 1,
      name: "Yash",
      role: "Senior Developer",
    },
    {
      id: 2,
      name: "Vaibhav",
      role: "Backend Developer",
    },
    {
      id: 3,
      name: "Suresh",
      role: "Frontend Developer",
    },
  ];

  return (
    <div>
      {details
        .filter((data) => data.id === parseInt(params.uid))
        .map((item) => (
          <h1 key={item.id}>
            Name : {item.name} and Role : {item.role}
          </h1>
        ))}
    </div>
  );
}

export default DetailPage;
