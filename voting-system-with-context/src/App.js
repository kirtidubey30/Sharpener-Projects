import "./App.css";
import { useContext, useState } from "react";
import AddFormData from "./components/AddFormData";
import VoteList from "./components/VoteList";
import cartContext from "./store/cart-context";

function App() {
  const [addNewDataclicked, setAddNewDataClicked] = useState(false);
  const voteCtx = useContext(cartContext);
  return (
    <div className="App">
      <h1
        style={{ display: "flex", justifyContent: "center" }}
        className="heading"
      >
        Class Monitor Vote
      </h1>
      <span>Total Votes : {voteCtx.items.length || 0}</span>
      <div>
        <button onClick={() => setAddNewDataClicked(true)}>Add new Vote</button>
      </div>
      {addNewDataclicked && <AddFormData />}
      <VoteList />
    </div>
  );
}

export default App;
