import React, { useEffect, useState } from "react";
import { isCategoryEmpty } from "../JS Functions/categoriesFunctions";
import CategoriesInputs from "../Components/CategoriesInputs";
import IncomesInputs from "../Components/IncomesInputs";
import ExpensesInputs from "../Components/ExpensesInputs";
import { getIncomesAmount } from "../JS Functions/incomesFunctions";
import { getExpensesAmount } from "../JS Functions/ExpensesFunctions";

export default function MangePage() {

  const [renderComponents, setRenderComponents] = useState();

  useEffect(() => {
    setRenderComponents(
      isCategoryEmpty() ? (
        <>
          <CategoriesInputs />
          <IncomesInputs />
        </>
      ) : (
        <>
          <CategoriesInputs />
          <IncomesInputs />
          <ExpensesInputs />
        </>
      )
    );
  }, []);


  return <div>{renderComponents}</div>;
}
