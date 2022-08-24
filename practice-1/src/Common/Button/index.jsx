import { CommonButton } from "./styles";
import React from "react";

const Button = ({ onClicked, text, className, icon }) => {
  return (
    <>
      <CommonButton onClick={onClicked} className={className}>
        {text} <i className={icon}></i>
      </CommonButton>
    </>
  );
};

export default Button;
