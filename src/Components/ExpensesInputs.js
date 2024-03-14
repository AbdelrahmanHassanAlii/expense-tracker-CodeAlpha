import React, { useEffect, useState } from "react";
import "../CSS/inputsArea.css";
import {
  checkLocalStorage,
  checkValues,
} from "../JS Functions/globalFunctions";
import { saveExpense } from "../JS Functions/ExpensesFunctions";
import {
  checkLocalStorageCategories,
  getAllCategories,
} from "../JS Functions/categoriesFunctions";
import Swal from "sweetalert2";

export default function ExpensesInputs() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(""); // State to hold the selected category
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Check if local storage is empty
    checkLocalStorageCategories();
    // Fetch all categories
    setCategories(getAllCategories());
  }, [categories]);

  const handleSave = () => {
    checkLocalStorage();
    // Check if both amount, description, and category are not empty before saving
    if (checkValues(amount, description) && category !== "") {
      // Construct the data object to save to local storage
      const data = {
        date: new Date(),
        amount: amount,
        description: description,
        category: category, // Add the selected category to the data object
      };
      // Save the expense to local storage
      saveExpense(data);
      // Clear input fields after saving
      setAmount("");
      setDescription("");
      // Alert user that data is saved (optional)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Expense has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      // Alert user to fill in all fields before saving (optional)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in both amount, description, and select a category.",
      });
    }
  };

  return (
    <div className="inputArea container">
      <h2 className="text-center my-3"> Add New Expense </h2>
      <label htmlFor="input">Amount</label>
      <input
        id="input"
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount"
      />
      <label htmlFor="Description">Description</label>
      <input
        id="Description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter Description"
      />
      {/* Select category */}
      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Choose Category</option>
        {/* Map categories to options */}
        {categories && categories.length > 0 ? (
          categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))
        ) : (
          <option value="">No categories found</option>
        )}
      </select>
      <button className="save-btn btn btn-primary d-block" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
