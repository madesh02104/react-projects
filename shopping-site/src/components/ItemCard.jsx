import React from "react";
import { useContext } from "react";
import { ShopContext } from "../layouts/MainLayout";

const ItemCard = ({ item }) => {
  const { handleOperation } = useContext(ShopContext);

  return (
    <li className="flex flex-col justify-between items-center gap-1 bg-white shadow-2xl rounded-md p-4 h-full min-h-[25rem]">
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="w-full h-40 flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-auto object-contain"
          />
        </div>
        <h3 className="text-lg md:text-xl text-center mt-4">
          {item.title}
        </h3>
        <p className="capitalize font-light mb-4">{item.category}</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-xl font-bold">Rs. {item.price}</p>
        <section className="flex gap-4">
          <button
            className="bg-orange-500 text-xl text-white py-1 px-4 rounded-s-full w-10 
                     hover:bg-orange-400 active:bg-black transition-colors"
            onClick={() => handleOperation(item.id, "decrement")}
          >
            -
          </button>
          <p className="bg-gray-200 py-1 px-4 rounded-md min-w-[3rem] text-center">
            {item.quantityOrdered}
          </p>
          <button
            className="bg-orange-500 text-xl text-white py-1 px-4 rounded-e-full w-10 
                     hover:bg-orange-400 active:bg-black transition-colors"
            onClick={() => handleOperation(item.id, "increment")}
          >
            +
          </button>
        </section>
      </div>
    </li>
  );
};

export default ItemCard;
