import { useEffect, useState } from "react";
import BookedSeats from "../BookedSeats/BookedSeats";
const BookingForm = (props) => {
  const handleAddClick = (event) => {
    event.preventDefault();
    if (userName.length && seatNum.length) {
      props.addData(userName, seatNum);
      setSeatNum("");
      setUserName("");
    }
  };
  const [userName, setUserName] = useState("");
  const [seatNum, setSeatNum] = useState("");
  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const onChangeSeatNum = (event) => {
    setSeatNum(event.target.value);
  };
  return (
    <div style={{ display: "flex" }}>
      <span>
        <label>User Name:</label>
        <input type="text" value={userName} onChange={onChangeUserName}></input>
      </span>
      <span>
        <label>Seat Number:</label>
        <input type="number" value={seatNum} onChange={onChangeSeatNum}></input>
      </span>
      <span>
        <button onClick={handleAddClick}>Add</button>
      </span>
    </div>
  );
};
export default BookingForm;
