import "./ExpenseForm.css";
const ExpenseForm = () => {
  const clickHandler = (event) => {
    event.preventDefault();
    const title = document.getElementById("ExpenseTitle").value;
    const amount = document.getElementById("ExpenseAmount").value;
    const date = document.getElementById("ExpenseDate").value;
    console.log(
      `Expense Title = ${title} \n Expense Amount = ${amount} \n Expense Date = ${date}`
    );
  };
  return (
    <div className="formContainer">
      <form className="form-Title">
        <h1>Expense Form</h1>
        <label htmlFor="ExpenseTitle">
          Expense title
          <input type="text" id="ExpenseTitle" />
        </label>
        <label htmlFor="ExpenseAmount">
          Expense Amount
          <input type="number" id="ExpenseAmount" />
        </label>
        <label htmlFor="ExpenseDate">
          Date
          <input type="date" id="ExpenseDate" />
        </label>
        <button className="saveBtn" onClick={clickHandler}>
          Save
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
