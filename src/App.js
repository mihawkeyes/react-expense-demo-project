import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Light bill",
      amount: 978,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "gas bill",
      amount: 1568,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const expenseAddHandler = (expense) => {
    expenses.push(expense);
    console.log(expenses);
  };
  return (
    <div className="expense">
      <NewExpense onExpenseAdd={expenseAddHandler} />
      <Card className="expenses">
        <Expenses expense={expenses} />
      </Card>
    </div>
  );
}

export default App;
