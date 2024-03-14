import React, { useEffect, useState } from "react";
import {
  deleteCategoryByName,
  getAllCategories,
} from "../JS Functions/categoriesFunctions";
import "../CSS/categories.css";
import { MdDelete } from "react-icons/md";
export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(getAllCategories());
  }, []);

  const deleteCategory = (name) => {
    deleteCategoryByName(name);
    setCategories(getAllCategories());
  };

  return (
    <div className="categories container">
      {categories.map((category, index) => {
        return (
          <div key={index} className="categories-item">
            {category}
            <button onClick={() => deleteCategory(category)}>
              {" "}
              <MdDelete color="red" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
