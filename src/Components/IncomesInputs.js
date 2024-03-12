import React, { useState } from "react";
import { saveIncome } from "../JS Functions/incomesFunctions";
import { checkValues } from "../JS Functions/globalFunctions";

export default function IncomesInputs() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    if (checkValues(amount, description)) {
      const data = {
        date: new Date(),
        amount: amount,
        description: description,
      };
      saveIncome(data);
      setAmount("");
      setDescription("");
      alert("Data saved to local storage");
    } else {
      alert("Please fill in both amount and description before saving");
    }
  };

  return (
    <div className="inputArea container">
      <h2 className="text-center my-3"> Add New Income </h2>
      <label htmlFor="incomeAmount">Amount</label>
      <input
        id="incomeAmount"
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount"
      />

      <label htmlFor="incomeDescription">Description</label>
      <input
        id="incomeDescription"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter Description"
      />

      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
