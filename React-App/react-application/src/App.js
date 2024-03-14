import ExpenseItems from "./components/ExpenseItems/ExpenseItems";
import "./App.css";
import { useState } from "react";

function App() {
  const expenseTitle = "Expense Items ";
  const [letsBegin, setLetsBegin] = useState(false);
  const [bgImagepath, setBgImagepath] = useState("../public/Designer.png");
  const onClickstart = () => {
    setLetsBegin(true);
    setBgImagepath("../public/ExpenseTrackerBg.png");
  };
  return (
    <div className="App" style={{ backgroundImage: bgImagepath }}>
      {letsBegin && (
        <div className="ExpenseTrackerMainDiv">
          <header>
            <h1 className="title">{expenseTitle}</h1>
          </header>
          <ExpenseItems />
        </div>
      )}
      {!letsBegin && (
        <button className="letsBeginBtn" onClick={onClickstart}>
          Click Here
        </button>
      )}
    </div>
  );
}

export default App;
