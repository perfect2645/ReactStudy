import React from "react";
import Counter from "../../UI/counter/Counter";
import classes from "./Meal.module.css";

const Meal = (props) => {
  const desc = <p className={classes.desc}>{props.meal.desc}</p>;

  return (
    <section className={classes.Meal}>
      <div className={classes.shotcut}>
        <img src={props.meal.img} alt="" />
      </div>
      <div className={classes.content}>
        <h2 className={classes.title}>{props.meal.title}</h2>
        {props.isMenu ? desc : null}
        <p className={classes.desc}>{props.meal.desc}</p>
        <div className={classes.priceBox}>
          <span className={classes.price}>{props.meal.price}</span>
          <Counter meal={props.meal} />
        </div>
      </div>
    </section>
  );
};

export default Meal;
