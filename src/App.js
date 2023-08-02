import { useState } from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const localExpensesArray =
  JSON.parse(localStorage.getItem("USER_EXPENSES_ARRAY")) || [];
const expensesArray = localExpensesArray.map((element) => {
  return {
    id: element.id,
    title: element.title,
    amount: element.amount,
    date: new Date(element.date),
  };
});
function App() {
  const [expenses, setExpenses] = useState(expensesArray);
  function addExpenseHandler(expense) {
    setExpenses((prevState) => {
      localStorage.setItem(
        "USER_EXPENSES_ARRAY",
        JSON.stringify([expense, ...prevState])
      );
      return [expense, ...prevState];
    });
  }
  function deleteExpenseItem(expenseId) {
    setExpenses((prevState) => {
      return prevState.filter((element) => element.id !== expenseId);
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items={expenses}
        deleteExpenseItem={deleteExpenseItem}
      ></Expenses>
    </div>
  );
}

export default App;
