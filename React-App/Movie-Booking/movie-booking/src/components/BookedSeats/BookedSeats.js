const BookedSeats = (props) => {
  if (!props.bookedSeats || props.bookedSeats.length === 0) {
    return <h3 style={{ maxWidth: "20rem" }}>Nothing Present</h3>;
  }
  const deleteHandler = (id) => {
    props.deleteList(id);
  };
  return (
    <div style={{ maxWidth: "20rem", margin: "0.5rem" }}>
      {props.bookedSeats.map((val) => (
        <span style={{ display: "flex", margin: "0.5rem 0rem" }} key={val.id}>
          {`${val.userName} - ${val.seatNum}`}
          <button>Edit</button>
          <button onClick={() => deleteHandler(val.id)}>Delete</button>
        </span>
      ))}
    </div>
  );
};

export default BookedSeats;
