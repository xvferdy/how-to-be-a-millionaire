import React from "react";
import moneyPyramid from "../helpers/moneyPyramid";

function RightPanel({ questionNumber }) {
  return (
    <div className="pyramid">
      <ul className="money-list">
        {moneyPyramid.map((money) => (
          <li
            className={
              questionNumber === money.id
                ? "money-list-item active"
                : "money-list-item"
            }
          >
            <span className="money-list-item-number">{money.id}</span>
            <span className="money-list-item-amount">{money.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RightPanel;
