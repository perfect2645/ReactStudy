import classes from "./Bar.module.css";

const Bar = (props) => {
  return (
    <div className={classes.bar}>
      <p className={classes.price}>{props.totalPrice}</p>
      <button className={classes.settleBtn}>去支付</button>
    </div>
  );
};

export default Bar;
