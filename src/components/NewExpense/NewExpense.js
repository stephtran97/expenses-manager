import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const uuid = require("uuid");

export default function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: uuid.v4(),
    };
    props.onAddExpense(expenseData);
    setAddingState(false);
  }
  // Is Start adding form?
  const [addingState, setAddingState] = useState(false);

  function startAddNewExpense() {
    setAddingState(true);
  }
  function cancelAddNewExpense() {
    setAddingState(false);
  }
  // Form content
  const formContent = addingState ? (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onAddingNewExpense={cancelAddNewExpense}
    />
  ) : (
    <button onClick={startAddNewExpense}>Add New Expense</button>
  );

  return <div className="new-expense">{formContent}</div>;
}
