import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  const deleteExpenseItem = () => {
    props.deleteExpenseItem(props.id);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={deleteExpenseItem} className="btn-delete">
          Delete
        </button>
      </Card>
    </li>
  );
}
