import React, { useEffect, useState } from "react";
import {
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
import TableOfExpenses from "../Components/TableOfExpenses";

export default function HomePage() {
  const [totalExpansesAmount, setTotalExpansesAmount] = useState();
  const [totalExpenses, setTotalExpenses] = useState();

  const [totalIncomesAmount, setTotalIncomesAmount] = useState();
  const [totalIncomes, setTotalIncomes] = useState();

  useEffect(() => {
    const updateValues = () => {
      setTotalExpansesAmount(getExpensesAmount());
      setTotalExpenses(getExpensesCount());
      setTotalIncomesAmount(getIncomesAmount());
      setTotalIncomes(getIncomesCount());
    };

    // Call updateValues initially
    updateValues();

    // Update values every 0.5 second
    const interval = setInterval(updateValues, 500);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

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
        <TableOfExpenses />
      </div>
    </div>
  );
}
