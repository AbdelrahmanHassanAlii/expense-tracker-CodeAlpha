import React, { useEffect, useState } from "react";
import { isCategoryEmpty } from "../JS Functions/categoriesFunctions";
import CategoriesInputs from "../Components/CategoriesInputs";
import IncomesInputs from "../Components/IncomesInputs";
import ExpensesInputs from "../Components/ExpensesInputs";
import "../CSS/mange.css";

export default function MangePage() {
  const [renderComponents, setRenderComponents] = useState();

  useEffect(() => {
    setRenderComponents(
      isCategoryEmpty() ? (
        <div className="mange">
          <CategoriesInputs />
          <IncomesInputs />
        </div>
      ) : (
        <div className="mange">
          <CategoriesInputs />
          <IncomesInputs />
          <ExpensesInputs />
        </div>
      )
    );
  }, [renderComponents]);

  return <div>{renderComponents}</div>;
}
