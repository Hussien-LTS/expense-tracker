import React from "react";
import CustomBtn from "./CustomBtn";
import "./ExpenseForm.css";

const CustomForm = (props) => {
  

  return (
    <form onSubmit={props.submit}>
      {/* <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>{props.label}</label>
          <input
            value={props.enteredValue}
            type={props.type}
            onChange={props.ChangeHandler}
            min={props.min || null}
            max={props.max || null}
            step={props.step || null}
          />
        </div>
      </div> */}
      <div className="new-expense__actions">
    <CustomBtn type ='button' buttonText='Cancel' hide ={props.onCancel}/>
    <CustomBtn type ='submit' buttonText='Cancel' hide ={props.onCancel}/>
    </div>
    </form>
  );
};

export default CustomForm;
