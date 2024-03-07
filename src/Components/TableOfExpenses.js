import React from "react";
import "../CSS/tableOfExpenses.css";

import TableRows from "./TableRows";

export default function TableOfExpenses() {
  return (
    <div className="container">
      <table className="table-of-exp">
        <thead className="table-of-exp-head">
          <tr className="table-of-exp-head-row" key={"head"}>
            <th className="head-item id">ID</th>
            <th className="head-item date">Date</th>
            <th className="head-item amount">Amount</th>
            <th className="head-item description">Description</th>
          </tr>
        </thead>
        <tbody>
          <TableRows />
        </tbody>
      </table>
    </div>
  );
}
