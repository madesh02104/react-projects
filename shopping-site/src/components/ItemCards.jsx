import React from "react";
import ItemCard from "./ItemCard";
import { useContext } from "react";
import { ShopContext } from "../layouts/MainLayout";

const ItemCards = ({category}) => {
  const { inventory } = useContext(ShopContext);

  return (
    <section className="w-[65%] ml-[22rem] min-[1080px]:w-[75%]">
      <ul className="grid grid-cols-2 gap-4 min-[1080px]:grid min-[1080px]:grid-cols-3">
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
