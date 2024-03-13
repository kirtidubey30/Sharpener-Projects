import "./ExpenseItems.css";
import ExpenseForm from "../NewExpense/ExpenseForm";
import expenseObj from "../Data/ExpensesData";
import { useState } from "react";
function ExpenseItems() {
  const [expenses, setExpense] = useState(expenseObj);
  const onSaveExpDataHandler = (eneteredExpData) => {
    const enteredData = {
      ...eneteredExpData,
      id: Math.random().toString(),
    };
    setExpense((prevExpenses) => [enteredData, ...prevExpenses]);
  };
  //for filterChange
  const [selectedFilterExpenses, setselectedFilterExpenses] =
    useState(expenseObj);
  const onYearFilterChange = (year) => {
    setselectedFilterExpenses(
      expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === year;
      })
    );
  };
  return (
    <div>
      <div className="expensesParentDiv">
        {selectedFilterExpenses.map((expense) => (
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
      <ExpenseForm
        onSaveExpenseData={onSaveExpDataHandler}
        onYearFilterChange={onYearFilterChange}
      />
    </div>
  );
}
export default ExpenseItems;
