import React, { useEffect, useState } from "react";
import { getExpenses } from "../JS Functions/globalFunctions";

export default function TableRows() {
  let loadedExpenses = [];
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    let loadedExpenses = getExpenses();
    setExpenses(loadedExpenses);
  }, [loadedExpenses]);

  return expenses.map((exp) => (
    <tr className="table-of-exp-row text-center">
      <td>{exp.id}</td>
      <td>{exp.date}</td>
      <td>{exp.amount}</td>
      <td>{exp.description}</td>
    </tr>
  ));
}
