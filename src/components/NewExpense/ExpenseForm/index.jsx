import React, { useState } from "react";

import './ExpenseForm.css'
const ExpenseForm = (props) => {
  const [entredTitle, setEntredTitle] = useState("");
  const [entredAmount, setEntredAmount] = useState("");
  const [entredDate, setEntredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEntredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEntredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEntredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: entredTitle,
      amount: entredAmount,
      date: new Date(entredDate),
    };
console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setEntredTitle("");
    setEntredAmount("");
    setEntredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={entredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={entredAmount}
            type="number"
            min="0.1"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={entredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
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
