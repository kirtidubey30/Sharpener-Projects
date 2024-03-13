import "./ExpenseItems.css";
import { useState } from "react";
function ExpenseItems(props) {
  const clickHandler = () => {
    props.onDelete();
  };
  const [clickMeText, setClickMeText] = useState("Click Me");
  const clickMeHandler = () => {
    setClickMeText("100$");
  };
  return (
    <div style={{ display: "inline-block" }}>
      <span className="items">
        <div className="data">{props.expenseData}</div>
        <div className="data">{props.LocationOfExpenditure}</div>
        <button className="btn-price">{props.price}</button>
        <button className="btn-delete" onClick={clickHandler}>
          Delete
        </button>
        <button className="btn-clickMe" onClick={clickMeHandler}>
          {clickMeText}
        </button>
      </span>
    </div>
  );
}
export default ExpenseItems;
