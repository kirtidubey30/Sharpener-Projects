import "./App.css";
import Header from "./components/Header/Header";
import BookingForm from "./components/BookingForm/BookingForm";
import BookedSeats from "./components/BookedSeats/BookedSeats";
import { useState } from "react";

function App() {
  const [bookedSeats, setBookedSeats] = useState([]);
  const [isSeatPresent, setSeatIsPresent] = useState();
  const addData = (name, seatNo) => {
    const isPresent = bookedSeats.some((seat) => seat.seatNum === seatNo);
    if (!isPresent) {
      setSeatIsPresent(false);
      const id = `b${bookedSeats.length + 1}`;
      setBookedSeats([
        ...bookedSeats,
        { userName: name, seatNum: seatNo, id: id },
      ]);
    } else if (isPresent) {
      setSeatIsPresent(true);
      window.alert("Already Booked");
    }
  };
  const deleteList = (id) => {
    setBookedSeats(bookedSeats.filter((seat) => seat.id !== id));
  };
  const findSeats = (seatNo) => {
    if (seatNo.length > 0) {
      const foundSeats = bookedSeats.filter(
        (seats) => seats.seatNum === seatNo
      );
      if (foundSeats) {
        setBookedSeats(foundSeats);
      } else {
        setBookedSeats([]);
      }
    } else {
      setBookedSeats([]);
    }
  };
  return (
    <div className="App">
      <Header bookedSeats={bookedSeats} findSeats={findSeats} />
      <BookingForm addData={addData} />
      <BookedSeats bookedSeats={bookedSeats} deleteList={deleteList} />
    </div>
  );
}

export default App;
