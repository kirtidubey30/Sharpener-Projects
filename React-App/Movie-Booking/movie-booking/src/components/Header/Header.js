const Header = (props) => {
  const totalBooked = props?.bookedSeats?.length;
  const findSeats = (event) => {
    if (event.key == "Enter") {
      props.findSeats(event.target.value);
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Movie Booking</span>
      <span>Total booked : {totalBooked}</span>
      <span>
        <label>Find</label>
        <input type="number" onKeyUp={findSeats} />
      </span>
    </div>
  );
};
export default Header;
