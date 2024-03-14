import React, { useEffect, useState } from "react";
import {
  deleteExpenseByIndex,
  getExpenses,
} from "../JS Functions/ExpensesFunctions";
import Table from "../Components/Table";
import { Link } from "react-router-dom";

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    setExpenses(getExpenses());
  }, []);

  const deleteExpense = (index) => {
    deleteExpenseByIndex(index);
    setExpenses(getExpenses());
  };

  return (
    <div className="expenses-page my-5">
      {expenses.length === 0 ? (
        <>
          <h3 className="text-center my-3">No Expenses</h3>
          <Link to="/add">
            {" "}
            <button className="btn btn-primary d-block m-auto">
              {" "}
              Add Expense{" "}
            </button>
          </Link>
        </>
      ) : (
        <>
          <h3 className="text-center my-3">Expenses</h3>
          <Table data={expenses} deleteFunction={deleteExpense} />{" "}
        </>
      )}
    </div>
  );
}
