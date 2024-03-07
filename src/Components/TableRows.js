import React, { useEffect, useState } from "react";
import { getDate, getExpenses, getTime } from "../JS Functions/globalFunctions";
import "../CSS/tableRows.css";

export default function TableRows() {
  let loadedExpenses = [];
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    loadedExpenses = getExpenses();
    setExpenses(loadedExpenses);
  }, [loadedExpenses]); // Empty dependency array to fetch expenses only once on component mount

  return expenses.map((exp, index) => (
    <tr className="table-of-exp-row text-center" key={index}>
      <td className="table-cell id">{index + 1}</td>
      <td className="table-cell date">{getDate(exp.date)}</td>
      <td className="table-cell time">{getTime(exp.date)}</td>
      <td className="table-cell amount">{exp.amount}</td>
      <td className="table-cell description">{exp.description}</td>
    </tr>
  ));
}
