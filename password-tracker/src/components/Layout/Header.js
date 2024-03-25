import React, { useContext, useState, useEffect } from "react";
import cartContext from "../../store/cart-context";

function Header() {
  const pwdCtx = useContext(cartContext);
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [addNewPassClicked, setAddNewPassClicked] = useState(false);

  const handleNewPwd = () => {
    const itemToBeAdded = {
      id: pwdCtx.items.length + 1,
      title: title,
      password: password,
    };
    pwdCtx.addItem(itemToBeAdded);
    setTitle("");
    setPassword("");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    console.log("pwdCtx value from Header.js", pwdCtx);
  }, [pwdCtx]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Password Keeper</span>
      <span>Total Password : 0</span>
      <button
        onClick={() => setAddNewPassClicked(true)}
        style={{ width: "10rem", textAlign: "center", margin: "auto" }}
      >
        Add New Password
      </button>
      {pwdCtx?.items.length > 0 && (
        <span>
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
        </span>
      )}
      {addNewPassClicked && (
        <div className="addPassModal">
          <label>Title</label>
          <input type="text" value={title} onChange={handleTitleChange} />
          <label>Password</label>
          <input type="text" value={password} onChange={handlePasswordChange} />
          <button onClick={handleNewPwd}>Add</button>
          <button onClick={() => setAddNewPassClicked(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Header;
