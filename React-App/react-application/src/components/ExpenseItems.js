import "./ExpenseItems.css";
function ExpenseItems() {
  const expenseTitle = "Expense Items ";
  const expenseData = "Food";
  const price = "Rs 10";
  const LocationOfExpenditure = 'Raipur'
  return (
    <div style={{ display: "inline-block" }}>
      <h3 className="title">{expenseTitle}</h3>
      <span className="items">
        <div className="data">{expenseData}</div>
        <div className="data">{LocationOfExpenditure}</div>
        <button className="btn-price">{price}</button>
      </span>
    </div>
  );
}
export default ExpenseItems;
