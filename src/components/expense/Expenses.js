import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card ClassName="expenses">
      <ExpenseItem item={props.expense[0]}></ExpenseItem>
      <ExpenseItem item={props.expense[1]}></ExpenseItem>
      <ExpenseItem item={props.expense[2]}></ExpenseItem>
      <ExpenseItem item={props.expense[3]}></ExpenseItem>
    </Card>
  );
};

export default Expenses;
