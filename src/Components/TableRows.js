import React, { useEffect, useState } from "react";
import {
  combineAndSortByDateTime,
  getDate,
  getTime,
} from "../JS Functions/globalFunctions";
import "../CSS/tableRows.css";
import { Button } from "react-bootstrap";
import {
  deleteExpenseByIndex,
  getExpenses,
} from "../JS Functions/ExpensesFunctions";
import { getIncomes } from "../JS Functions/incomesFunctions";
// import { getAllCategories } from "../JS Functions/categoriesFunctions";

export default function TableRows({ data, deleteFunction}) {
  // const [expenses, setExpenses] = useState([]);
  // const [incomes, setIncomes] = useState([]);
  // const [combined, setCombined] = useState([]);

  // useEffect(() => {
  //   setExpenses(getExpenses());
  // }, []); // Empty dependency array to fetch expenses only once on component mount

  // useEffect(() => {
  //   setExpenses(getExpenses());
  //   setIncomes(getIncomes());
  //   console.log(incomes);
  //   console.log(expenses);
  //   setCombined(combineAndSortByDateTime(incomes, expenses));
  // }, []);

  // const handleDelete = (index) => {
  //   const updatedExpenses = deleteExpenseByIndex(index);
  //   setExpenses(updatedExpenses); // Update the state with the new array of expenses
  // };

  // const handleUpdate = (index) => {
  //   // checkLocalStorageCategories();
  //   getAllCategories();
  // };

  return data.map((exp, index) => (
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
          onClick={() => deleteFunction(index)}
        >
          Delete
        </Button>
        {/* Update button */}
        {/* <Button variant="info" onClick={() => handleUpdate(index)}>
          Update
        </Button>{" "} */}
      </td>
    </tr>
  ));
}
// import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
// import {
//   combineAndSortByDateTime,
//   getDate,
//   getTime,
// } from "../JS Functions/globalFunctions";
// import {
//   deleteExpenseByIndex,
//   getExpenses,
// } from "../JS Functions/ExpensesFunctions";
// import { getIncomes } from "../JS Functions/incomesFunctions";

// export default function TableRows() {
//   const [expenses, setExpenses] = useState([]);
//   const [incomes, setIncomes] = useState([]);
//   const [combined, setCombined] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const fetchedExpenses = await getExpenses();
//       const fetchedIncomes = await getIncomes();
//       setExpenses(fetchedExpenses);
//       setIncomes(fetchedIncomes);
//       setCombined(combineAndSortByDateTime(fetchedIncomes, fetchedExpenses));
//     };

//     const interval = setInterval(fetchData, 50); // Run every 50ms

//     return () => clearInterval(interval); // Cleanup function to clear the interval
//   }, []);

//   const handleDelete = (index) => {
//     const updatedExpenses = deleteExpenseByIndex(index);
//     setExpenses(updatedExpenses);
//   };

//   return expenses.map((exp, index) => (
//     <tr className="table-of-exp-row text-center" key={index}>
//       <td className="table-cell id">{index + 1}</td>
//       <td className="table-cell date">{getDate(exp.date)}</td>
//       <td className="table-cell time">{getTime(exp.date)}</td>
//       <td className="table-cell amount">{exp.amount}</td>
//       <td className="table-cell description">{exp.description}</td>
//       <td className="table-cell actions">
//         {/* Delete button */}
//         <Button
//           className="mx-2"
//           variant="danger"
//           onClick={() => handleDelete(index)}
//         >
//           Delete
//         </Button>
//         {/* Update button */}
//         {/* <Button variant="info" onClick={() => handleUpdate(index)}>
//           Update
//         </Button>{" "} */}
//       </td>
//     </tr>
//   ));
// }
