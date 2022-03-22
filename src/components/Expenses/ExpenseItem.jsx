import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate.jsx";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  let title = props.title;
  const sad = () => {
    console.log("ding ding",title);
    props.title = "ding ding";
  };
  return (
    <Card className="expense-item">
      <ExpenseDate />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={sad}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;