import React from "react";
import classes from "./AddExpense.module.css";
function AddExpense() {
  return (
    <div className={classes.formContainer}>
      <form>
        <h2>ADD EXPENSE</h2>
        <div>
          <div className={classes.addExp}>
            <label>Money Spent: </label>
            <input type="number" />
          </div>
          <div>
            <label>Description :</label>
            <input />
          </div>
          <div>
            <label>Category </label>
            <select>
              <option value="Movie">Movie</option>
              <option value="Others">Others</option>
              <option value="Travel">Travel</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddExpense;
