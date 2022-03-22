import Expenses from "./components/Expenses/Expenses";
import "./App.css";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "e1 T",
      amount: "e1 Am",
      date: new Date(2022, 7, 14),
    },
    {
      id: "e1",
      title: "e1 T",
      amount: "e1 Am",
      date: new Date(2022, 7, 14),
    },
    {
      id: "e1",
      title: "e1 T",
      amount: "e1 Am",
      date: new Date(2022, 7, 14),
    },
    {
      id: "e1",
      title: "e1 T",
      amount: "e1 Am",
      date: new Date(2022, 7, 14),
    },
  ];
  return (
    <div>
      <h2>ddd</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
