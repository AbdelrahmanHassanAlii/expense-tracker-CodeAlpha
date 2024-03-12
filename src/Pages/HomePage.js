import React, { useEffect, useState } from "react";
import ExpensesInputs from "../Components/ExpensesInputs";
import CategoriesInputs from "../Components/CategoriesInputs";
import { isCategoryEmpty } from "../JS Functions/categoriesFunctions";
import IncomesInputs from "../Components/IncomesInputs";

export default function HomePage() {
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
