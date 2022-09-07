import React from "react";
import Meal from "./meal/Meal";
import classes from "./Meals.module.css";

const Meals = (props) => {

  
  return (
    <div>
      {props.mealsData.map(item => <Meal key={item.id} meal={item} />)}
    </div>
  );
};

export default Meals;
