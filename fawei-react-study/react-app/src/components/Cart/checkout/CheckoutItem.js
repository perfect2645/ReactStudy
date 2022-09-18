import classes from "./CheckoutItem.module.css";
import Counter from "../../UI/counter/Counter";

const CheckoutItem = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.shortcut}>
        <img src={props.meal.img} alt="" />
      </div>
      <div className={classes.desc}>
        <h2 className={classes.title}>{props.meal.title}</h2>
        <div className={classes.amount}>
          <div>
            <Counter meal={props.meal}></Counter>
          </div>
          <div className={classes.price}>
            {props.meal.amount * props.meal.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
