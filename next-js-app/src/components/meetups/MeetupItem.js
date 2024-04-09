import { useState } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import Link from "next/link";

function MeetupItem(props) {
  const [selectedMeetUpId, setSelectedMeetUpId] = useState("");

  const handleSelectedMeetup = (id) => {
    setSelectedMeetUpId(id);
    localStorage.setItem("selectedMeetUpId", id); // Update localStorage with the new ID
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <Link href={`${props.id}`}>
            <button onClick={() => handleSelectedMeetup(props.id)}>
              Show Details
            </button>
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
