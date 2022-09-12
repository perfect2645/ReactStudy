import React from "react";
import Meal from "./meal/Meal";
import classes from "./Meals.module.css";

const Meals = (props) => {
  return (
    <div className={classes.meals}>
      {props.mealsData.map((item) => (
        <Meal isMenu={true} key={item.id} meal={item} />
      ))}
    </div>
  );
};

export default Meals;
