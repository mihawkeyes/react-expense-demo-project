import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (prpos) => {
  const [entertedTitle, setEntertedTitle] = useState("");
  const [entertedDate, setEntertedDate] = useState("");
  const [entertedAmount, setEntertedAmount] = useState("");

  const entertedTitleChangeHandler = (event) => {
    setEntertedTitle(event.target.value);
  };

  const entertedAmountChangeHandler = (event) => {
    setEntertedAmount(event.target.value);
  };

  const entertedDateChangeHandler = (event) => {
    setEntertedDate(event.target.value);
  };

  const expenseDataSubmitHandler = (event) => {
    event.preventDefault();
    const expense = {
      title: entertedTitle,
      date: new Date(entertedDate),
      amount: entertedAmount,
    };

    prpos.onExpenseDataChange(expense);

    setEntertedTitle("");
    setEntertedAmount("");
    setEntertedDate("");
  };

  return (
    <form onSubmit={expenseDataSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={entertedTitleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount (in &#8377;)</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={entertedAmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={entertedDateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
