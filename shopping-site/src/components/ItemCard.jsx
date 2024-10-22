import React from "react";
import { useContext } from "react";
import { ShopContext } from "../layouts/MainLayout";

const ItemCard = ({ item }) => {
  const { handleOperation } = useContext(ShopContext);

  return (
    <li key={item.id} className="h-[25rem] flex flex-col justify-between items-center gap-1 bg-white shadow-2xl rounded-md px-2 py-4">
      <div className="flex flex-col justify-center items-center">
        <img src={item.image} alt={item.title} className="h-40 w-40" />
        <h3 className="text-xl text-center">{item.title}</h3>
        <p className="capitalize font-light mb-4">{item.category}</p>
      </div>
      
      <div className="flex flex-col justify-center items-center">
              <p className="text-xl font-bold">Rs. {item.price}</p>
              <section className="flex gap-4">
                <button className="bg-orange-500 text-xl text-white py-1 px-4 rounded-s-full w-10 hover:bg-orange-400 active:bg-black" onClick={() => handleOperation(item.id, "decrement")}>-</button>
                <p className="bg-gray-200 py-1 px-4 rounded-md">{item.quantityOrdered}</p>
                <button className="bg-orange-500 text-xl text-white py-1 px-4 rounded-e-full w-10 hover:bg-orange-400 active:bg-black" onClick={() => handleOperation(item.id, "increment")}>+</button>
              </section>
      </div>

    </li>
  );
};

export default ItemCard;
