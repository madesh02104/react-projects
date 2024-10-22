import React from "react";
import { useContext } from "react";

const ItemCard = () => {
  const {handleOperation} = useContext(ShopContext);

  return (
    <li key={item.id}>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>Rs. {item.price}</p>
      <p>{item.category}</p>
      <section>
        <button onClick={() => handleOperation(item.id, "decrement")}>
          {" "}
          -{" "}
        </button>
        <p>{item.quantityOrdered}</p>
        <button onClick={() => handleOperation(item.id, "increment")}>
          {" "}
          +{" "}
        </button>
      </section>
    </li>
  );
};

export default ItemCard;
