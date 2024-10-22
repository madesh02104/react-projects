import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext({
  inventory: [],
  handleOperation: () => {},
});

function App() {
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

  const handleOperation = (id, Operation) => {
    setInventory((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          if (operation === "decrement") {
            return { ...item, quantityOrdered: item.quantityOrdered - 1 };
          } else {
            return { ...item, quantityOrdered: item.quantityOrdered + 1 };
          }
        }
        return item;
      });
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
