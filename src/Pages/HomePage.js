import React, { useEffect, useState } from "react";
import {
  deleteExpenseByIndex,
  getExpenses,
  getExpensesAmount,
  getExpensesCount,
} from "../JS Functions/ExpensesFunctions";
import {
  getIncomesAmount,
  getIncomesCount,
} from "../JS Functions/incomesFunctions";
import HomeCard from "../Components/HomeCard";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import "../CSS/home.css";
import { subtractNumbers } from "../JS Functions/globalFunctions";
import Table from "../Components/Table";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [expenses, setExpenses] = useState([]);

  const [totalExpansesAmount, setTotalExpansesAmount] = useState();
  const [totalExpenses, setTotalExpenses] = useState();

  const [totalIncomesAmount, setTotalIncomesAmount] = useState();
  const [totalIncomes, setTotalIncomes] = useState();

  useEffect(() => {
    setExpenses(getExpenses());
    setTotalExpansesAmount(getExpensesAmount());
    setTotalExpenses(getExpensesCount());
    setTotalIncomesAmount(getIncomesAmount());
    setTotalIncomes(getIncomesCount());
  }, []);

  const deleteExpense = (index) => {
    deleteExpenseByIndex(index);
    setExpenses(getExpenses());
    setTotalExpansesAmount(getExpensesAmount());
    setTotalExpenses(getExpensesCount());
    setTotalIncomesAmount(getIncomesAmount());
    setTotalIncomes(getIncomesCount());
  };

  return (
    <div className="home-page container">
      <div className="analysis">
        <div>
          <HomeCard
            icon={<FaArrowAltCircleDown style={{ color: "red" }} />}
            color={"red"}
            name="Expenses"
            amount={totalExpansesAmount}
            totalNumber={totalExpenses}
          />
        </div>
        <div className="incomes">
          <HomeCard
            icon={<FaArrowAltCircleUp style={{ color: "lightgreen" }} />}
            color={"lightgreen"}
            name="Incomes"
            amount={totalIncomesAmount}
            totalNumber={totalIncomes}
          />
        </div>
        <div className="balance">
          <HomeCard
            icon={<FaBalanceScale style={{ color: "lightblue" }} />}
            color="lightblue"
            name="Balance"
            amount={subtractNumbers(totalIncomesAmount, totalExpansesAmount)}
          />
        </div>
      </div>
      <div className="last">
        {expenses.length === 0 ? (
          <>
            <h3 className="text-center my-3">No expenses</h3>
            <Link to="/add">
              {" "}
              <button className="btn btn-primary d-block m-auto text-decoration-none">
                {" "}
                Add Expenses{" "}
              </button>
            </Link>
          </>
        ) : (
          <>
              <h3 className="text-center my-3">Last { expenses.length > 5 ? 5 : expenses.length } Expenses</h3>
            <Table data={expenses.slice(0, 5)} deleteFunction={deleteExpense} />
          </>
        )}
      </div>
    </div>
  );
}
