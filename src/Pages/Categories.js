import React, { useEffect, useState } from "react";
import {
  deleteCategoryByName,
  getAllCategories,
} from "../JS Functions/categoriesFunctions";
import "../CSS/categories.css";
import Swal from "sweetalert2";
import { getExpensesAmountByCategory } from "../JS Functions/ExpensesFunctions";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(getAllCategories());
  }, [categories]);

  const deleteCategory = (name) => {
    // Add confirmation alert before deleting
    Swal.fire({
      icon: "warning",
      title: "Do you want to delete this category?",
      text: "This will delete all the expenses with this category.",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        // If confirmed, delete the category and update the state
        deleteCategoryByName(name);
        setCategories(getAllCategories());
        // Show success alert
        Swal.fire("Deleted!", "Category deleted successfully.", "success");
      }
    });
  };

  return (
    <div className="categories my-5 container">
      {categories.length === 0 ? (
        // Render message when there are no categories
        <>
          <br />
          <Link to="/add">
            {" "}
            <button className="btn btn-primary d-block m-auto">
              {" "}
              Add Categories{" "}
            </button>
          </Link>
        </>
      ) : (
        // Render categories if there are any
        categories.map((category, index) => (
          <div key={index} className="category">
            <div className="category-name">{category}</div>
            <div className="amount">
              Total Amount: $ {getExpensesAmountByCategory(category)}
            </div>
            <button onClick={() => deleteCategory(category)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}
