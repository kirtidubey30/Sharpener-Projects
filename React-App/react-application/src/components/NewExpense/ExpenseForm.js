import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const clickHandler = (event) => {
    event.preventDefault();
    const formData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    console.log(
      `Expense Title = ${title} \n Expense Amount = ${amount} \n Expense Date = ${date}`
    );
    props.onSaveExpenseData(formData);
    setAmount("");
    setDate("");
    setTitle("");
  };
  return (
    <div className="formContainer">
      <form className="form-Title">
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
        <button className="saveBtn" onClick={clickHandler}>
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
