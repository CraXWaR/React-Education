import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState("2020");

  const filterChangeHandler = (year) => {
    setYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onSelectFilter={filterChangeHandler} />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
