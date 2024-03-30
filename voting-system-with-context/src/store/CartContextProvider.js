import React, { useEffect, useState } from "react";
import cartContext from "./cart-context";
function CartContextProvider({ children }) {
  const endPoint =
    "https://crudcrud.com/api/dd3fcd06dd73459892dadd99e773d2ca/classMonitorVote";
  const [voteList, setVoteList] = useState([]);
  useEffect(() => {
    fetch(endPoint, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log("data fetched successfully :", data);
          setVoteList(data);
        });
      } else {
        res.json().then((data) => {
          console.log("Error =", data.error.message);
          window.alert(data.error.message);
        });
      }
    });
  }, []);
  const getData = () => {
    fetch(endPoint, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log("data fetched successfully :", data);
          setVoteList(data);
        });
      } else {
        res.json().then((data) => {
          console.log("Error =", data.error.message);
          window.alert(data.error.message);
        });
      }
    });
  };
  const addItemHandler = (item) => {
    getData();
  };
  const removeItemHandler = (id) => {
    fetch(`${endPoint}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        console.log("data removed successfully :");
        const updatedData = voteList.filter((item) => item._id !== id);
        setVoteList(updatedData);
      } else {
        res.json().then((data) => {
          console.log("Error =", data.error.message);
          window.alert(data.error.message);
        });
      }
    });
  };

  const contextVal = {
    items: voteList,
    totalItem: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <cartContext.Provider value={contextVal}>{children}</cartContext.Provider>
  );
}

export default CartContextProvider;
