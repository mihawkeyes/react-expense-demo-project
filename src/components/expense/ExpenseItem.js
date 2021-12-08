import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.item.title);

  const clickHandler = () => {
    setTitle("Updated!!!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.item.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">&#8377; {props.item.amount}</div>
      </div>
      <button onClick={clickHandler}>click me</button>
    </Card>
  );
}

export default ExpenseItem;
