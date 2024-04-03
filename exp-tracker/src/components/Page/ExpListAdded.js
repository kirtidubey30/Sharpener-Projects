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

  const handleDownload = () => {
    const data = JSON.stringify(expList, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "expenses.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleActivatePremium = () => {
    document.body.classList.toggle("dark-theme");
  };

  return (
    <div>
      <h2>Expense List</h2>
      <h3>Total Amount Spent : Rs. {calculateTotalAmt()}/-</h3>
      {totalAmtVal.current >= 10000 && (
        <>
          <button className="activateBtn" onClick={handleActivatePremium}>
            Activate Premium
          </button>
          <button className="downloadBtn" onClick={handleDownload}>
            Download
          </button>
        </>
      )}
      <ul>
        {Object.keys(expList).map((key) => (
          <li key={key}>
            <strong>Amount:</strong> {expList[key].amount},{" "}
            <strong>Description:</strong> {expList[key].description},{" "}
            <strong>Category:</strong> {expList[key].category}
            <button
              className="editBtn"
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
            <button
              className="delteBtn-Exp"
              onClick={() => props.handleOnDelete(key)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpListAdded;
