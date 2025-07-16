import React from "react";
import Meal from "./Meal/Meal";

const Meals = (props) => {
  return (
    <>
      {props.meals.map((meal) => {
        return <Meal key={meal.id} meal={meal}></Meal>;
      })}
    </>
  );
};

export default Meals;
