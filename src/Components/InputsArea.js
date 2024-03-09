import React, { useState } from "react";
import "../CSS/inputsArea.css";
import {
  checkLocalStorage,
  checkValues,
} from "../JS Functions/globalFunctions";
import { saveExpense } from "../JS Functions/ExpensesFunctions";

export default function InputsArea() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(""); // State to hold the selected category

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
      alert("Data saved to local storage!");
    } else {
      // Alert user to fill in all fields before saving (optional)
      alert("Please fill in both amount, description, and select a category.");
    }
  };

  return (
    <div className="inputArea container">
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
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        {/* Add more options as needed */}
      </select>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
