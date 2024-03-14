import "./ExpenseItems.css";
import ExpenseForm from "../NewExpense/ExpenseForm";
import Chart from "../Chart/Chart";
import expenseObj from "../Data/ExpensesData";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
function ExpenseItems() {
  const [expenses, setExpense] = useState(expenseObj);
  const onSaveExpDataHandler = (eneteredExpData) => {
    const enteredData = {
      ...eneteredExpData,
      id: `e${expenses.length + 1}`,
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
      <ExpensesChart dataPoints={selectedFilterExpenses} />
      {selectedFilterExpenses.length <= 0 ? (
        <p className="noDataFound">No data Found !!!</p>
      ) : (
        <div className="expensesParentDiv">
          {selectedFilterExpenses.map((expense) => (
            <div key={expense.id} className="items">
              <div className="data">{expense.title}</div>
              <div className="data">{expense.date.toLocaleDateString()}</div>
              <button className="btn-price">{expense.amount}</button>
            </div>
          ))}
          {selectedFilterExpenses.length == 1 && (
            <p className="singleElement">
              Only single Expense here. Please add more...
            </p>
          )}
        </div>
      )}
      <ExpenseForm
        onSaveExpenseData={onSaveExpDataHandler}
        onYearFilterChange={onYearFilterChange}
      />
    </div>
  );
}
export default ExpenseItems;
