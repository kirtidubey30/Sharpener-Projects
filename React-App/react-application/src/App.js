import ExpenseItems from "./components/ExpenseItems/ExpenseItems";
import "./App.css";

function App() {
  const expenseTitle = "Expense Items ";
  return (
    <div className="App">
      <h3 className="title">{expenseTitle}</h3>
      <ExpenseItems />
    </div>
  );
}

export default App;
