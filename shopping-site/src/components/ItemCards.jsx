import React from "react";
import ItemCard from "./ItemCard";
import { useContext } from "react";
import { ShopContext } from "../layouts/MainLayout";
import Spinner from "./Spinner";

const ItemCards = ({category}) => {
  const { inventory } = useContext(ShopContext);

  return (
    <section className="w-full md:ml-4 p-4">
      {inventory ? <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {inventory.map((item) => {
          if (category === "all" || item.category === category) {
            return <ItemCard key={item.id} item={item} />;
          }
          return null;
        })}
      </ul> : <Spinner loading={'true'} />}
      
    </section>
  );
};

export default ItemCards;