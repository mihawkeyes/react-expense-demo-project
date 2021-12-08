import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const expenseDataChangeHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onExpenseAdd(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseDataChange={expenseDataChangeHandler} />
    </div>
  );
};

export default NewExpense;
