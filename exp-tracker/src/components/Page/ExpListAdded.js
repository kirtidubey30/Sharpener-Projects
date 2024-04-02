import React, { useRef } from "react";

function ExpListAdded(props) {
  const { expList } = props;
  const totalAmtVal = useRef();

  const calculateTotalAmt = () => {
    let totalAmount = 0;
    for (const key in expList) {
      const amount = parseFloat(expList[key].amount);
      totalAmount += amount;
    }
    totalAmtVal.current = totalAmount;
    return totalAmount;
  };

  const handleActivatePremium = () => {
    // Toggle dark-theme class on body element
    document.body.classList.toggle("dark-theme");
  };

  return (
    <div>
      <h2>Expense List</h2>
      <h3>Total Amount Spent : Rs. {calculateTotalAmt()}/-</h3>
      {totalAmtVal.current >= 10000 && (
        <button onClick={handleActivatePremium}>Activate Premium</button>
      )}
      <ul>
        {Object.keys(expList).map((key) => (
          <li key={key}>
            <strong>Amount:</strong> {expList[key].amount},{" "}
            <strong>Description:</strong> {expList[key].description},{" "}
            <strong>Category:</strong> {expList[key].category}
            <button
              onClick={() =>
                props.handleOnEdit(
                  key,
                  expList[key].amount,
                  expList[key].description,
                  expList[key].category
                )
              }
            >
              Edit
            </button>
            <button onClick={() => props.handleOnDelete(key)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpListAdded;
