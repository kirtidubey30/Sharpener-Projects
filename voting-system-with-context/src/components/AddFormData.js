import React, { useContext, useRef, useState } from "react";
import cartContext from "../store/cart-context";

function AddFormData() {
  const [enteredData, setEnteredData] = useState({
    name: "",
    monitor: "",
    totalVote: 0,
  });
  const endPoint =
    "https://crudcrud.com/api/dd3fcd06dd73459892dadd99e773d2ca/classMonitorVote";
  const voteCtx = useContext(cartContext);
  const enteredName = useRef();
  const choosedMonitor = useRef("Suresh");
  const submitHandler = (event) => {
    event.preventDefault();
    const nameVal = enteredName.current.value;
    const monitorVal = choosedMonitor.current.value;
    setEnteredData((prevState) => ({
      ...prevState,
      name: nameVal,
      monitor: monitorVal,
    }));
    fetch(endPoint, {
      method: "POST",
      body: JSON.stringify({
        name: nameVal,
        monitor: monitorVal,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        //success
        res.json().then((data) => {
          voteCtx.addItem({ name: nameVal, monitor: monitorVal });
          console.log("Data added succesfully: with data =", data);
        });
      } else {
        res.json().then((data) => {
          console.log("Error =", data.error.message);
          window.alert(data.error.message);
        });
      }
      enteredName.current.value = "";
      choosedMonitor.current.value = "Suresh";
    });
  };
  return (
    <>
      <div className="formContainer">
        <form onSubmit={submitHandler}>
          <label htmlFor="Sname">
            Student Name
            <input type="text" id="Sname" ref={enteredName} />
          </label>
          <label htmlFor="MontiorOptions">
            Choose Monitor
            <select
              name="MontiorOptions"
              id="MontiorOptions"
              ref={choosedMonitor}
            >
              <option value="Suresh">Suresh</option>
              <option value="Deepak">Deepak</option>
              <option value="Abhik">Abhik</option>
            </select>
          </label>
          <button type="submit">Vote</button>
        </form>
      </div>
    </>
  );
}

export default AddFormData;
