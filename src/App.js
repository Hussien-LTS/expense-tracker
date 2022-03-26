import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const dummy_expenses = [
  {
    id: "e1",
    title: "e1 T",
    amount:87,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "e1 T",
    amount:87,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e3",
    title: "e1 T",
    amount:87,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e4",
    title: "e1 T",
    amount:87,
    date: new Date(2022, 7, 14),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses(prveExpenses=>{
      return [expense, ...prveExpenses]
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
