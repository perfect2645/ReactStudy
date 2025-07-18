import Meal from "./Meal/Meal";
import classes from "./Meals.module.css";

const Meals = (props) => {
  return (
    <div className={classes.meals}>
      {props.meals.map((meal) => {
        return <Meal key={meal.id} meal={meal}></Meal>;
      })}
    </div>
  );
};

export default Meals;
