import React from "react";
import "../CSS/homeCard.css";
export default function HomeCard({ icon, color, name, amount, totalNumber }) {
  return (
    <div className="home-card">
      <div className="content">
        <i> {icon} </i>
        <p className="name"> {name} </p>
      </div>
      <div className="amount" style={{ color: color }}>
        {" "}
        $ {amount}{" "}
      </div>
      {totalNumber && (
        <div className="total-number">
          
            {" "}
            from {totalNumber} {name}
          
        </div>
      )}
    </div>
  );
}
