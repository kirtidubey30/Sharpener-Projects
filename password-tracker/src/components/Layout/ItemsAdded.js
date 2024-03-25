import React, { useContext, useState, useEffect } from "react";
import cartContext from "../../store/cart-context";

function ItemsAdded(props) {
  const pwdCtx = useContext(cartContext);
  const [isEdit, setIsEdit] = useState("");
  let itemToEdit = {};
  const handleonEditClick = (item) => {
    pwdCtx.removeItem(item.id);
    window.alert(
      "The item is removed SuccessFully Ypu can add it from Add New Password"
    );
    setIsEdit(true);
    itemToEdit = { ...item };
  };

  useEffect(() => {
    if (isEdit) {
      props.handleEditItem(itemToEdit);
    }
  }, [isEdit, itemToEdit, props]);
  return (
    <div>
      <div className="pwdList">
        {pwdCtx.items.map((item) => (
          <ul key={item.id}>
            <li>
              {item.title} - {item.password}
              <button onClick={() => handleonEditClick(item)}>Edit</button>
              <button onClick={() => pwdCtx.removeItem(item.id)}>Delete</button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default ItemsAdded;
