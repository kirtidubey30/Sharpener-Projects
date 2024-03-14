import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [isAddExpenseClicked, isSetAddExpenseClicked] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //for filterChange
  const [selectedYear, setSelectedYear] = useState("");
  const clickHandler = (event) => {
    event.preventDefault();
    const formData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(formData);
    setAmount("");
    setDate("");
    setTitle("");
    setSelectedYear(selectedYear);
    handleFilterChange(null, selectedYear);
  };
  const handleFilterChange = (event, val) => {
    const year = val.length == 0 ? event.target.value : val;
    setSelectedYear(year);
    props.onYearFilterChange(year);
  };
  return (
    <div className="formContainer">
      <form className="form-Title">
        {!isAddExpenseClicked ? (
          //add Add expense Button
          <div
            className="AddExpnseBtn"
            onClick={() => isSetAddExpenseClicked(true)}
          >
            Add Expense
          </div>
        ) : (
          <>
            <label htmlFor="filterYear" className="filterClass">
              Filter
              <select
                id="filterYear"
                onChange={(event) => handleFilterChange(event, "")}
                value={selectedYear}
              >
                <option value="">Select Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </label>
            <h1>Expense Form</h1>
            <label htmlFor="ExpenseTitle">
              Expense title
              <input
                type="text"
                id="ExpenseTitle"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </label>
            <label htmlFor="ExpenseAmount">
              Expense Amount
              <input
                type="number"
                id="ExpenseAmount"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
              />
            </label>
            <label htmlFor="ExpenseDate">
              Date
              <input
                type="date"
                id="ExpenseDate"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </label>
            <button
              className="clsBtn"
              onClick={() => isSetAddExpenseClicked(false)}
            >
              Close
            </button>
            <button className="saveBtn" onClick={clickHandler}>
              Add Expense
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ExpenseForm;
