import React from "react";
import ItemCard from "./ItemCard";
import { useContext } from "react";

const ItemCards = () => {
  const { inventory } = useContext(ShopContext);

  return (
    <section className="w-[75%] grid grid-cols-3">
      <ul className="inventory-items">
        {inventory.map((item) => {
          if (category === "all" || item.category === category) {
            return <ItemCard item={item} />;
          }
          return null;
        })}
      </ul>
    </section>
  );
};

export default ItemCards;
