import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React from "react";
import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext({
  inventory: [],
  handleOperation: () => {},
});

const MainLayout = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        for (let item of data) {
          item.quantityOrdered = 0;
          item.price = item.price * 75;
        }
        setInventory(data);
        console.log(inventory);
      });
  }, []);

  const handleOperation = (id, operation) => {
    setInventory((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          if (operation === "decrement") {
            return { ...item, quantityOrdered: (item.quantityOrdered > 0 ? item.quantityOrdered -1 : item.quantityOrdered)};
          } else {
            return { ...item, quantityOrdered: item.quantityOrdered + 1 };
          }
        }
        return item;
      });
    });
  };

  return (
    <ShopContext.Provider value={{ inventory, handleOperation }}>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow m-2">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ShopContext.Provider>
  );
};

export default MainLayout;
