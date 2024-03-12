import "./ExpenseItems.css";
function ExpenseItems(props) {
  return (
    <div style={{ display: "inline-block" }}>
      <span className="items">
        <div className="data">{props.expenseData}</div>
        <div className="data">{props.LocationOfExpenditure}</div>
        <button className="btn-price">{props.price}</button>
      </span>
    </div>
  );
}
export default ExpenseItems;
