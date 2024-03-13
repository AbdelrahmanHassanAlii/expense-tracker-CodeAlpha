import React, { useEffect, useState } from "react";
import TableOfExpenses from "../Components/TableOfExpenses";
import {
  deleteExpenseByIndex,
  getExpenses,
} from "../JS Functions/ExpensesFunctions";

export default function ExpensesPage() {
    const [expenses, setExpenses] = useState([]);
    useEffect(() => {
      setExpenses(getExpenses());
    }, []);

    const deleteExpense = (index) => {
        deleteExpenseByIndex(index);
        setExpenses(getExpenses());
    }

  return (
    <div>
      <TableOfExpenses data={expenses} deleteFunction={deleteExpense} />
    </div>
  );
}
