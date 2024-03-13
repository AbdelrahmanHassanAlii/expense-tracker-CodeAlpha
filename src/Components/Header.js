import React from "react";
import "../CSS/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header container-fluid">
      <div className="container">
        <div className="logo">
          <p className="name">Tracker</p>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/incomes">Incomes</Link>
            </li>
            <li>
              <Link to="/expenses">Expenses</Link>
            </li>
            <li>
              <Link to="/add">Add New</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
