import React, { useEffect } from "react";
import response from "../../Meals/Meals.js";
import styles from "./Menu.module.css";
function Menu() {
  useEffect(() => {
    console.log("response from Meals.js", response);
  }, []);
  return (
    <div className={styles.menus}>
      {response.map((items) => (
        <span className={styles.parentItemMenu} key={items.id}>
          <h2>{items.title}</h2>
          <p>{items.description}</p>
          <p>
            <b>${items.price}</b>
          </p>
        </span>
      ))}
    </div>
  );
}
/*
{
    id: 10,
    title: "Avocado Toast",
    description:
      "Start your day right with our creamy avocado toast. Slices of whole-grain bread topped with smashed avocado, cherry tomatoes, red pepper flakes, and a sprinkle of sea salt. Simple and nutritious!",
    image: "https://dummyimage.com/400x300/33cc99/ffffff&text=Avocado+Toast",
    price: 50,
  },
*/

export default Menu;
