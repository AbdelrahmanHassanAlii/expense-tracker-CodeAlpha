import React, { useState } from "react";
import "../CSS/inputsArea.css";
import {
  checkLocalStorage,
  checkValues,
  saveExpense,
} from "../JS Functions/globalFunctions";

export default function InputsArea() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    checkLocalStorage();
    // Check if both amount and description are not empty before saving
    if (checkValues(amount, description)) {
      // Construct the data object to save to local storage
      const data = {
        date: new Date(),
        amount: amount,
        description: description,
      };
      // save the expense to local storage
      saveExpense(data);
      // Clear input fields after saving
      setAmount("");
      setDescription("");
      // Alert user that data is saved (optional)
      alert("Data saved to local storage!");
    } else {
      // Alert user to fill in all fields before saving (optional)
      alert("Please fill in both amount and description fields.");
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
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
