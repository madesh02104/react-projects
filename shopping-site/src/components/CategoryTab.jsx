import React from "react";

const CategoryTab = ({ handleCategoryChange, isMobileMenuOpen }) => {

  return (
    <section
      className={`
      ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0
      transition-transform duration-300
      fixed md:sticky
      top-20 md:top-24
      left-0
      h-screen md:h-auto
      w-64 md:w-72 lg:w-80
      bg-white
      p-4 
      shadow-2xl 
      rounded
      z-10
    `}
    >
      <h3 className="text-2xl font-medium text-orange-500 text-center mb-4">
        Select Category
      </h3>
      <hr />
      <hr />
      <ul className="flex flex-col justify-center items-center py-2">
        {[
          ["all", "All Items"],
          ["jewelery", "Jewelry"],
          ["electronics", "Electronics"],
          [`men's clothing`, "Men's Clothing"],
          [`women's clothing`, "Women's Clothing"],
        ].map(([value, label]) => (
          <li
            key={value}
            onClick={() => handleCategoryChange(value)}
            className="text-xl px-1 py-3 rounded-md w-full border-2 border-white 
                     hover:bg-gray-200 active:scale-90 cursor-pointer text-center"
          >
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoryTab;
