import React from "react";
import cls from "./form.module.scss";

const Form = ({ className, onSubmit, children }) => {
  return (
    <form noValidate onSubmit={onSubmit} className={`form ${className || ""}`}>
      {children}
    </form>
  );
};

export default Form;
