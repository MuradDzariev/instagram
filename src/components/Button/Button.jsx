import React from "react";
import cls from "./button.module.scss";

export const ButtonVariant = {
  SOLID: "solid",
  OUTLINE: "outline",
  CLEAR: "clear",
};

const Button = ({
  className,
  disabled,
  variant = ButtonVariant.SOLID,
  type,
  onClick,
  fullWidth,
  children,
}) => {
  const style = {
    width: fullWidth ? "100%" : "",
  };

  return (
    <button
      style={style}
      type={type}
      className={`${cls.btn} ${cls[variant]} ${className || ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
