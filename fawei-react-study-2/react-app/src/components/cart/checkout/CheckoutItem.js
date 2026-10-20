import Counter from "../../UI/Counter/Counter";
import classes from "./CheckoutItem.module.css";

const CheckoutItem = (props) => {
  return (
    <div className={classes.checkoutItem}>
      <div className={classes.shortCut}>
        <img src={props.meal.img} alt=""></img>
      </div>
      <article className={classes.content}>
        <h2>{props.meal.title}</h2>
        <div className={classes.amount}>
          <Counter meal={props.meal} disabled={true}></Counter>
          <div className={classes.pricing}>
            <span>{props.meal.amount * props.meal.price}</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CheckoutItem;
