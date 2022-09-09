
import classes from "./FilterMeals.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const FilterMeals = () => {
    return (
        <div className={classes.FilterMeals}>
            <div className={classes.inputOuter}>
                <input type="text" placeholder={"请输入关键字"} className={classes.searchText} />
                <FontAwesomeIcon icon={faSearch}
                className={classes.searchIcon}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default FilterMeals;