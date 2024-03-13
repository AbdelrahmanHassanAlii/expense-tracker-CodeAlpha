import React from "react";
import { getDate, getTime } from "../JS Functions/globalFunctions";
import "../CSS/tableRows.css";
import { Button } from "react-bootstrap";

export default function TableRows({ data, deleteFunction }) {
  if (!data) return null;
  return data.map((exp, index) => (
    <tr className="table-of-exp-row text-center" key={index}>
      <td className="table-cell id">{index + 1}</td>
      <td className="table-cell date">{getDate(exp.date)}</td>
      <td className="table-cell time">{getTime(exp.date)}</td>
      <td className="table-cell amount">{exp.amount}</td>
      <td className="table-cell description">{exp.description}</td>
      <td className="table-cell actions">
        {/* Delete button */}
        {deleteFunction && (
          <Button
            className="mx-2"
            variant="danger"
            onClick={() => deleteFunction(index)}
          >
            Delete
          </Button>
        )}
      </td>
    </tr>
  ));
}
