import React from "react";
import Counter from "../../UI/counter/Counter";
import classes from "./Meal.module.css";

const Meal = (porps) => {
  return (
    <section className={classes.Meal}>
      <div className={classes.shotcut}>
        <img src={porps.meal.img} alt="" />
      </div>
      <div className={classes.content}>
        <h2 className={classes.title}>{porps.meal.title}</h2>
        <p className={classes.desc}>
          {porps.meal.desc}
        </p>
        <div className={classes.priceBox}>
          <span className={classes.price}>{porps.meal.price}</span>
          <Counter meal={porps.meal}/>
        </div>
      </div>
    </section>
  );
};

export default Meal;
