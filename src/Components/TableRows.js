import React, { useEffect, useState } from "react";
import {
  getDate,
  getTime,
} from "../JS Functions/globalFunctions";
import "../CSS/tableRows.css";
import { Button } from "react-bootstrap";
import { deleteExpenseByIndex, getExpenses } from "../JS Functions/ExpensesFunctions";

export default function TableRows() {
  const [expenses, setExpenses] = useState([]);

  let loadedExpenses = [];

  useEffect(() => {
    loadedExpenses = getExpenses();
    setExpenses(loadedExpenses);
  }, [loadedExpenses]); // Empty dependency array to fetch expenses only once on component mount

  const handleDelete = (index) => {
    const updatedExpenses = deleteExpenseByIndex(index);
    setExpenses(updatedExpenses); // Update the state with the new array of expenses
  };

  const handleUpdate = (index) => {
    // Here you can implement your logic for updating the expense
    // For example, you can open a modal or navigate to a form page with pre-filled data
    console.log("Update expense at index:", index);
  };

  return expenses.map((exp, index) => (
    <tr className="table-of-exp-row text-center" key={index}>
      <td className="table-cell id">{index + 1}</td>
      <td className="table-cell date">{getDate(exp.date)}</td>
      <td className="table-cell time">{getTime(exp.date)}</td>
      <td className="table-cell amount">{exp.amount}</td>
      <td className="table-cell description">{exp.description}</td>
      <td className="table-cell actions">
        {/* Delete button */}
        <Button
          className="mx-2"
          variant="danger"
          onClick={() => handleDelete(index)}
        >
          Delete
        </Button>
        {/* Update button */}
        <Button variant="info" onClick={() => handleUpdate(index)}>
          Update
        </Button>{" "}
      </td>
    </tr>
  ));
}
