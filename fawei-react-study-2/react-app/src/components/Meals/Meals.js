import React from "react";
import Meal from "./Meal/Meal";

const Meals = (props) => {
  return (
    <>
      {props.meals.map((meal) => {
        return <Meal meal={meal}></Meal>;
      })}
    </>
  );
};

export default Meals;
