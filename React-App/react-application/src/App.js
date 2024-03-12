import ExpenseItems from "./components/ExpenseItems/ExpenseItems";
import "./App.css";
import expenseObj from "../src/components/Data/ExpensesData";

function App() {
  const expenseTitle = "Expense Items ";
  return (
    <div className="App">
      <h3 className="title">{expenseTitle}</h3>
      {expenseObj.map((ele) => (
        <ExpenseItems
          expenseData={ele.expenseData}
          price={ele.price}
          LocationOfExpenditure={ele.LocationOfExpenditure}
        />
      ))}
    </div>
  );
}

export default App;
