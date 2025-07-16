import Counter from "../../UI/Counter/Counter";
import classes from "./Meal.module.css";

const Meal = (props) => {
  return (
    <div className={classes.Meal}>
      <div className={classes.imgBox}>
        <img src={props.meal.img} alt="" />
      </div>
      <div className={classes.content}>
        <h2 className={classes.title}>{props.meal.title}</h2>
        <p className={classes.desc}>{props.meal.desc}</p>
        <div className={classes.priceBox}>
          <span className={classes.price}>{props.meal.price}</span>
          <div>数量</div>
          <Counter meal={props.meal}></Counter>
        </div>
      </div>
    </div>
  );
};

export default Meal;
