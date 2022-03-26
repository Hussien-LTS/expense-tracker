import React from "react";

// import "./CustomInput.css";

const CustomBtn = (props) => {
  return (
    <div className="new-expense__actions">
      <button type={props.type} onClick={props.hide || null}>
        {props.buttonText}
      </button>
    </div>
  );
};

export default CustomBtn;
