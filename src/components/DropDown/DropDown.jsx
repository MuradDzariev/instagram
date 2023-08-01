import React from "react";
import cls from "./dropDown.module.scss";
import { useState } from "react";
import { AppLink } from "..";

export const DropDownPos = {
  CENTRE: "centre",
  LEFT: "left",
  RIGHT: "right",
};

const DropDown = ({
  options,
  className,
  position = DropDownPos.RIGHT,
  onClick,
  children,
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(!open);
  };

  const onBlur = () => {
    setOpen(false);
  };

  return (
    <div className={cls.dropdown} onBlur={onBlur}>
      <button onClick={onOpen} className={cls.btn}>
        {children}
      </button>

      <ul
        className={`${cls.options} ${open ? cls.opened : ""} ${
          cls[position]
        } ${className}`}
      ></ul>
      {options.map((option, index) => {
        return (
          <li key={index} className={cls.option} onClick={onClick}>
            {option.to ? (
              <AppLink href={option.to}>{option.label}</AppLink>
            ) : (
              option.label
            )}
          </li>
        );
      })}
    </div>
  );
};

export default DropDown;
