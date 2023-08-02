import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const uuid = require("uuid");
export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((element) => {
        return (
          <ExpenseItem
            key={uuid.v4()}
            id={element.id}
            title={element.title}
            date={element.date}
            amount={element.amount}
            deleteExpenseItem={props.deleteExpenseItem}
          ></ExpenseItem>
        );
      })}
    </ul>
  );
}
