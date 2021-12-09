import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("");

  const filterChangeHandler = (filteredYear) => {
    setFilterYear(filteredYear);
  };

  return (
    <div>
      <ExpensesFilter onFilter={filterChangeHandler} />
      <Card ClassName="expenses">
        {props.expense
          .filter(
            (expense) => expense.date.getFullYear().toString() === filterYear
          )
          .map((expense) => {
            return <ExpenseItem key={expense.id} item={expense} />;
          })}
      </Card>
    </div>
  );
};

export default Expenses;
