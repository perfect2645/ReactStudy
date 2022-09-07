import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = (props) => {
  return (
    <div className={classes.counter}>
      {props.amount && props.amount > 0 ? (
        <>
          <button className={`${classes.btn} ${classes.sub}`}>
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
          </button>
          <span className={classes.countNum}>{props.amount}</span>
        </>
      ) : null}

      <button className={`${classes.btn} ${classes.add}`}>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Counter;
