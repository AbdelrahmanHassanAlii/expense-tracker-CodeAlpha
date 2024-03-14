import React, { useState } from "react";
import { checkValues } from "../JS Functions/globalFunctions";
import { saveCategory } from "../JS Functions/categoriesFunctions";
import Swal from "sweetalert2";

export default function CategoriesInputs() {
  const [name, setName] = useState("");

  const handleSave = () => {
    // Check if name and imageDataURL are not empty
    if (checkValues(name)) {
      saveCategory(name);
      setName("");
      // Alert user that data is saved (optional)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Category has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      // Alert user to fill in all fields before saving (optional)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields before saving",
      });
    }
    setName("");
  };

  return (
    <div className="inputArea container">
      <h2 className="text-center my-3"> Add New Category </h2>
      <label htmlFor="categoryName">Name</label>
      <input
        id="categoryName"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Category Name"
      />
      {/* File input for uploading image */}
      <button className="save-btn btn btn-primary d-block" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
