import React, { useEffect, useState } from "react";
import ExpensesInputs from "../Components/ExpensesInputs";
import CategoriesInputs from "../Components/CategoriesInputs";
import { isCategoryEmpty } from "../JS Functions/categoriesFunctions";

export default function HomePage() {
  const [renderComponents, setRenderComponents] = useState();

  useEffect(() => {
    setRenderComponents(
      isCategoryEmpty() ? (
        <CategoriesInputs />
      ) : (
        <>
          <ExpensesInputs />
          <CategoriesInputs />
        </>
      )
    );
  }, []);

  return (
    <div>
      {renderComponents}
    </div>
  );
}
