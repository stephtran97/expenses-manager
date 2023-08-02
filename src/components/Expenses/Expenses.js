import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const items = props.items;
  const [year, setYear] = useState("2023");
  function addFilterYearHandler(filteredYear) {
    setYear(filteredYear);
  }
  const filteredExpenses = items.filter(
    (ele) => ele.date.getFullYear().toString() === year
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterYear={addFilterYearHandler}
          selectedYear={year}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList
          items={filteredExpenses}
          deleteExpenseItem={props.deleteExpenseItem}
        />
      </Card>
    </div>
  );
}
