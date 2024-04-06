import React from "react";
import Link from "next/link";
function AboutUs() {
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
      <h1>This is AboutUs</h1>

      <ul>
        {details.map((post) => (
          <li key={post.id}>
            <Link href={`/about/${post.id}`}>{post.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutUs;
