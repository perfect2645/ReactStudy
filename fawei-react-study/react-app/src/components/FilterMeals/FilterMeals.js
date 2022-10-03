import classes from "./FilterMeals.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const FilterMeals = (props) => {
  const [keyword, setKeyword] = useState("");

  const searchTextChangeHandler = (e) => {
    setKeyword(e.target.value.trim());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      props.onFilter(keyword);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  return (
    <div className={classes.FilterMeals}>
      <div className={classes.inputOuter}>
        <input
          type="text"
          value={keyword}
          placeholder={"请输入关键字"}
          className={classes.searchText}
          onChange={searchTextChangeHandler}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className={classes.searchIcon}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default FilterMeals;
