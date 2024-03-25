import React, { useContext } from "react";
import cartContext from "../../store/cart-context";

function ItemsAdded() {
  const pwdCtx = useContext(cartContext);

  // State to hold the search query
  const [searchQuery, setSearchQuery] = React.useState("");

  // Filtered items based on search query
  const filteredItems = pwdCtx.items.filter((item) => {
    // Perform case-insensitive search on title or password
    return (
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.password.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div>
      <div className="pwdList">
        {filteredItems.map((item) => (
          <ul key={item.id}>
            <li>
              {item.title} - {item.password}
              <button onClick={() => pwdCtx.addItem(item)}>Edit</button>
              <button onClick={() => pwdCtx.removeItem(item.id)}>Delete</button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default ItemsAdded;
