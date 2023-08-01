import React from "react";
import { useState } from "react";

import cls from "./navSearch.module.scss";

const NavSearch = ({ className }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const clearInput = () => {
    setSearch("");
  };

  return (
    <form noValidate className={`${cls.navSearch} ${className || ""}`}>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={search}
      />

      {search && <span onClick={clearInput}>&times;</span>}
    </form>
  );
};

export default NavSearch;
