import React, { useEffect, useState } from "react";
import classes from "./AddExpense.module.css";
import ExpListAdded from "./ExpListAdded";
function AddExpense() {
  const [addExpDetail, setAddExpDetail] = useState({
    amount: "",
    description: "",
    category: "Movie",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [expList, setExpList] = useState({});
  const handleAddExpense = (event) => {
    event.preventDefault();
    fetch(
      "https://authforexptracker-default-rtdb.firebaseio.com/expenseList.json",
      {
        method: "POST",
        body: JSON.stringify({
          amount: addExpDetail.amount,
          description: addExpDetail.description,
          category: addExpDetail.category,
        }),
      }
    ).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log("Data added successfully");
          getData();
          window.alert("Data added successfully");
        });
        setAddExpDetail({
          amount: "",
          description: "",
          category: "Movie",
        });
      } else {
        res.json().then((data) => {
          console.log("Error =", data.error.message);
          window.alert(data.error.message);
        });
      }
    });
  };
  const getData = () => {
    setIsLoading(true);
    fetch(
      "https://authforexptracker-default-rtdb.firebaseio.com/expenseList.json",
      {
        method: "GET",
      }
    ).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log("Data fetched  successfully");
          setExpList(data);
          setIsLoading(false);
          // window.alert("Data fetched  successfully");
          console.log("val of ExpList =", expList);
        });
      } else {
        res.json().then((data) => {
          console.log("Error =", data.error.message);
          window.alert(data.error.message);
          setIsLoading(false);
        });
      }
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const onAmountChange = (event) => {
    event.preventDefault();
    setAddExpDetail((prevState) => ({
      ...prevState,
      amount: event.target.value,
    }));
  };
  const onDescChange = (event) => {
    event.preventDefault();
    setAddExpDetail((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  };
  const onCategoryChange = (event) => {
    event.preventDefault();
    setAddExpDetail((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };
  const handleOnCancel = () => {
    setAddExpDetail({
      amount: "",
      description: "",
      category: "Movie",
    });
  };
  useEffect(() => {
    console.log("body of editRequest =", addExpDetail);
  }, [addExpDetail]);
  const handleOnEdit = (itemId, amount, description, category) => {
    setAddExpDetail(() => ({
      amount,
      description,
      category,
    }));
    fetch(
      `https://authforexptracker-default-rtdb.firebaseio.com/expenseList/${itemId}.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          amount: amount,
          description: description,
          category: category,
        }),
      }
    ).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log("Data modifed successfully");
          getData();
          window.alert("Data modifed successfully");
        });
      } else {
        res.json().then((data) => {
          console.log("Error =", data.error.message);
          window.alert(data.error.message);
        });
      }
    });
  };
  const handleOnDelete = (itemId) => {
    fetch(
      `https://authforexptracker-default-rtdb.firebaseio.com/expenseList/${itemId}.json`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log("Data deleted successfully ");
          getData();
          window.alert("Expense Deleted Successfully");
        });
      } else {
        res.json().then((data) => {
          console.log("Error =", data.error.message);
          window.alert(data.error.message);
        });
      }
    });
  };
  return (
    <div className={classes.formContainer}>
      <form>
        <h2>ADD EXPENSE</h2>
        <div>
          <div className={classes.addExp}>
            <label>Money Spent: </label>
            <input
              type="number"
              value={addExpDetail.amount}
              onChange={onAmountChange}
            />
          </div>
          <div className={classes.addExp}>
            <label>Description :</label>
            <input
              type="text"
              value={addExpDetail.description}
              onChange={onDescChange}
            />
          </div>
          <div className={classes.addExp}>
            <label>Category </label>
            <select value={addExpDetail.category} onChange={onCategoryChange}>
              <option value="Movie">Movie</option>
              <option value="Others">Others</option>
              <option value="Travel">Travel</option>
              <option value="Healthcare Expenses">Healthcare Expenses</option>
              <option value="Groceries">Groceries</option>
              <option value="Housing Expenses">Housing Expenses</option>
            </select>
          </div>
          <div>
            <button className={classes.submitBtn} onClick={handleAddExpense}>
              Submit
            </button>
            <button className={classes.cancelBtn} onClick={handleOnCancel}>
              Cancel
            </button>
          </div>
        </div>
      </form>
      {isLoading && <h2>Fetching Data...</h2>}
      {
        <ExpListAdded
          expList={expList}
          handleOnDelete={handleOnDelete}
          handleOnEdit={handleOnEdit}
        />
      }
    </div>
  );
}

export default AddExpense;
