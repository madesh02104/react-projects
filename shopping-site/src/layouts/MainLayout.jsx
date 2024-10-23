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
    const fetchInventory = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
  
        const updatedData = data.map((item) => ({
          ...item,
          quantityOrdered: 0,
          price: item.price * 75,
        }));
        setInventory(updatedData);
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };
  
    fetchInventory();
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
