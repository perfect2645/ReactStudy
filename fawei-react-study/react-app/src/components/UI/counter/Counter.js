import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const Counter = (props) => {
  const ctx = useContext(CartContext);

  return (
    <div className={classes.counter}>
      {props.meal.amount && props.meal.amount > 0 ? (
        <>
          <button
            className={`${classes.btn} ${classes.sub}`}
            onClick={() => ctx.removeItem(props.meal)}
          >
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
          </button>
          <span className={classes.countNum}>{props.meal.amount}</span>
        </>
      ) : null}

      <button
        className={`${classes.btn} ${classes.add}`}
        onClick={() => ctx.addItem(props.meal)}
      >
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Counter;
