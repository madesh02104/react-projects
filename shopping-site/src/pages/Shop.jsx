import React from "react";
import CategoryTab from "../components/CategoryTab";
import ItemCards from "../components/ItemCards";
import { useState } from "react";

const Shop = () => {
  const [category, setCategory] = useState("all");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
    setIsMobileMenuOpen(false);
  }

  return (
    <section className="mt-20 min-h-screen">
      <button
        className="md:hidden fixed top-24 left-4 z-20 bg-orange-500 hover:bg-orange-400 text-white p-2 rounded-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "✕ Close" : "☰ Categories"}
      </button>

      <div className="flex flex-col md:flex-row gap-4 relative">
        <CategoryTab
          handleCategoryChange={handleCategoryChange}
          isMobileMenuOpen={isMobileMenuOpen}
        />

        <ItemCards category={category} />
      </div>
    </section>
  );
};

export default Shop;
