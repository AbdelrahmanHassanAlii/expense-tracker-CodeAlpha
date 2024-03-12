import React, { useEffect, useState } from "react";
import { getAllCategories } from "../JS Functions/categoriesFunctions";
import { FaArrowDown } from "react-icons/fa";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(getAllCategories());
  }, []);

  return (
    <div>
      {categories.map((category, index) => {
        return (
          <div key={index}>
            {category}
          </div>
        );
      })}
    </div>
  );
}
