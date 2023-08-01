import React from "react";
import { Link } from "react-router-dom";

const AppLink = ({ className, children, to }) => {
  return (
    <Link to={to} className={className || ""}>
      {children}
    </Link>
  );
};

export default AppLink;
