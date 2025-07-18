import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css";

const FilterMeals = (props) => {
  const searchTextChangeHandler = (e) => {
    props.onFilter(e.target.value.trim());
  };

  return (
    <header className={classes.container}>
      <div className={classes.inputOuter}>
        <input
          type="text"
          placeholder="请输入关键字"
          className={classes.searchText}
          onChange={(e) => searchTextChangeHandler(e)}
        />
        <FontAwesomeIcon icon={faSearch} className={classes.searchIcon} />
      </div>
    </header>
  );
};

export default FilterMeals;
