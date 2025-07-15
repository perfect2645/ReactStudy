import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Counter = (props) => {
  return (
    <div className={classes.counter}>
      {props.amount ? (
        <>
          <button className={`${classes.btnCount} ${classes.btnMinus}`}>
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
          </button>
          <span className={classes.count}>{props.amount}</span>
        </>
      ) : null}

      <button className={`${classes.btnCount} ${classes.btnAdd}`}>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Counter;
