import React, { useEffect, useState } from "react";
import {
  deleteIncomeByIndex,
  getIncomes,
} from "../JS Functions/incomesFunctions";
import Table from "../Components/Table";
import { Link } from "react-router-dom";

export default function IncomesPage() {
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    setIncomes(getIncomes());
  }, []);

  const deleteIncome = (index) => {
    deleteIncomeByIndex(index);
    setIncomes(getIncomes());
  };

  return (
    <div className="incomes-page my-5">
      {incomes.length === 0 ? (
        <>
          <h3 className="text-center my-3">No Incomes</h3>
          <Link to="/add">
            {" "}
            <button className="btn btn-primary d-block m-auto">
              {" "}
              Add Income{" "}
            </button>
          </Link>
        </>
      ) : (
        <>
          <h3 className="text-center my-3">Incomes</h3>
          <Table data={incomes} deleteFunction={deleteIncome} />
        </>
      )}
    </div>
  );
}
