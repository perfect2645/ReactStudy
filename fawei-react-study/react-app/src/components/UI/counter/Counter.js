import classes from "./Counter.module.css";

const Counter = (props) => {
  return (
    <div className={classes.counter}>
      {props.amount && props.amount > 0 ? (
        <>
          <button className={`${classes.btn} ${classes.sub}`}>-</button>
          <span className={classes.countNum}>{props.amount}</span>
        </>
      ) : null}

      <button className={`${classes.btn} ${classes.add}`}>+</button>
    </div>
  );
};

export default Counter;
