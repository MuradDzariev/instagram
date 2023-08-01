import React from "react";
import cls from "./icon.module.scss";
import { IconTypes } from "./IconTypes";

const Icon = ({ type, className }) => {
  return (
    <div className={`${cls.icon} ${className || ""}`}>
      {IconTypes.get(type)}
    </div>
  );
};

export default Icon;
