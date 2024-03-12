import "./ExpenseItems.css";
function ExpenseItems(props) {
  const clickHandler = () => {
    props.onDelete();
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
      </span>
    </div>
  );
}
export default ExpenseItems;
