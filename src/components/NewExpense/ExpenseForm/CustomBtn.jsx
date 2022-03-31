import React from "react";

// import "./CustomInput.css";

const CustomBtn = (props) => {
  return (
      <button type={props.type} onClick={props.hide || null}>
        {props.buttonText}
      </button>
  );
};

export default CustomBtn;
