import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expense of props.dataPoints) {
    const expenseDate = new Date(expense.date);
    const expenseMonth = expenseDate.getMonth();

    // Find the corresponding month in chartDataPoints and update its value
    const chartDataPoint = chartDataPoints.find(
      (dataPoint) => dataPoint.label === getMonthName(expenseMonth)
    );
    if (chartDataPoint) {
      chartDataPoint.value += expense.amount;
    }
  }

  return <Chart dataPoints={chartDataPoints} />;
};
// Function to get month name from month number
function getMonthName(monthNumber) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthNames[monthNumber];
}
export default ExpensesChart;
