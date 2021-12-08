import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("");

  console.log(filterYear);
  const filterChangeHandler = (filteredYear) => {
    setFilterYear(filteredYear);
  };

  return (
    <div>
      <ExpensesFilter onFilter={filterChangeHandler} />
      <Card ClassName="expenses">
        <ExpenseItem item={props.expense[0]}></ExpenseItem>
        <ExpenseItem item={props.expense[1]}></ExpenseItem>
        <ExpenseItem item={props.expense[2]}></ExpenseItem>
        <ExpenseItem item={props.expense[3]}></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
