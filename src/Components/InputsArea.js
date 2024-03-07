// import React from "react";
// import "../CSS/inputsArea.css";

// export default function InputsArea() {
//   return (
//     <div className="inputArea container">
//       <label for="input">Amount</label>
//       <input id="input" type="text" placeholder="Enter Amount" />
//       <label for="Description">Description</label>
//       <input id="Description" type="text" placeholder="Enter Description" />
//     </div>
//   );
// }

import React, { useState } from "react";
import "../CSS/inputsArea.css";

export default function InputsArea() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    // Check if both amount and description are not empty before saving
    if (amount.trim() !== "" && description.trim() !== "") {
      // Construct the data object to save to local storage
      const data = {
        amount: amount,
        description: description,
      };
      // Convert data to JSON string and save to local storage
      localStorage.setItem("expenseData", JSON.stringify(data));
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
