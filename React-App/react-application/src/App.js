import ExpenseItems from "./components/ExpenseItems/ExpenseItems";
import { useState } from "react";
import "./App.css";
import expenseObj from "../src/components/Data/ExpensesData";
import ExpenseForm from "./components/ExpenseItems/ExpenseForm";

function App() {
  const expenseTitle = "Expense Items ";
  const [expense, setExpense] = useState(expenseObj);
  const deleteExpenseHandler = (index) => {
    let updatedExpense = [...expense];
    updatedExpense.splice(index, 1);
    setExpense(updatedExpense);
    console.log("deleted succesfully");
  };
  return (
    <div className="App">
      <h3 className="title">{expenseTitle}</h3>
      {expense.map((ele, index) => (
        <ExpenseItems
          key={index}
          expenseData={ele.expenseData}
          price={ele.price}
          LocationOfExpenditure={ele.LocationOfExpenditure}
          onDelete={() => deleteExpenseHandler(index)}
        />
      ))}
      <div className="hrStyle">
        <hr />
      </div>
      <ExpenseForm />
    </div>
  );
}

export default App;
