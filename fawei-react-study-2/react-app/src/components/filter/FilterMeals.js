import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css";

const FilterMeals = (props) => {
  const [keyword, setKeyword] = React.useState("");

  React.useEffect(() => {
    const timer = setTimeout(() => {
      props.onFilter(keyword);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword, props.onFilter]);

  const searchTextChangeHandler = (e) => {
    setKeyword(e.target.value.trim());
  };

  return (
    <header className={classes.container}>
      <div className={classes.inputOuter}>
        <input
          value={keyword}
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
