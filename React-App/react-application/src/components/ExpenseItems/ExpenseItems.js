import "./ExpenseItems.css";
import ExpenseForm from "../NewExpense/ExpenseForm";
import expenseObj from "../Data/ExpensesData";
import { useState } from "react";
function ExpenseItems() {
  const [expenses, setExpense] = useState(expenseObj);
  const onSaveExpDataHandler = (eneteredExpData) => {
    console.log("eneteredExpData =", eneteredExpData);
    const enteredData = {
      ...eneteredExpData,
      id: Math.random().toString(),
    };
    console.log("val of eneteredData from parentElement = ", enteredData);
    setExpense((prevExpenses) => [enteredData, ...prevExpenses]);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {expenses.map((expense) => (
          <div key={expense.id} className="items">
            <div className="data">{expense.title}</div>
            <div className="data">{expense.date.toLocaleDateString()}</div>
            <button className="btn-price">{expense.amount}</button>
          </div>
        ))}
      </div>
      <div className="hrStyle">
        <hr />
      </div>
      <ExpenseForm onSaveExpenseData={onSaveExpDataHandler} />
    </div>
  );
}
export default ExpenseItems;
