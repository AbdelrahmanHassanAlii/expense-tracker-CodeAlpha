import React, { useEffect, useState } from "react";
import TableOfExpenses from "../Components/TableOfExpenses";
import { getIncomes } from "../JS Functions/incomesFunctions";

export default function IncomesPage() {
  const [incomes, setIncomes] = useState([]);
  useEffect(() => {
    setIncomes(getIncomes());
  }, []);
  return (
    <div>
      <TableOfExpenses data={incomes} />
    </div>
  );
}
