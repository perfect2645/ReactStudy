import classes from "./Counter.module.css";
import React from "react";
import CartContext from "../../../store/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Counter = (props) => {
  const cartContext = React.useContext(CartContext);

  const addHandler = () => {
    cartContext.addItem(props.meal);
  };

  const removeHandler = () => {
    cartContext.removeItem(props.meal.id);
  };

  return (
    <div className={classes.counter}>
      {props.meal.amount && props.meal.amount > 0 ? (
        <>
          <button
            disabled={props.disabled}
            className={`${classes.btnCount} ${classes.btnMinus}`}
            onClick={removeHandler}
          >
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
          </button>
          <span className={classes.count}>{props.meal.amount}</span>
        </>
      ) : null}

      <button
        disabled={props.disabled}
        className={`${classes.btnCount} ${classes.btnAdd}`}
        onClick={addHandler}
      >
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Counter;
