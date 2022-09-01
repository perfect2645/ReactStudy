import React from "react";
import Counter from "../../UI/counter/Counter";
import classes from "./Meal.module.css";

const Meal = () => {
  return (
    <section className={classes.Meal}>
      <div className={classes.shotcut}>
        <img src="/img/meals/1.png" alt="" />
      </div>
      <div className={classes.content}>
        <h2 className={classes.title}>汉堡包</h2>
        <p className={classes.desc}>
          百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！
        </p>
        <div className={classes.priceBox}>
          <span className={classes.price}>12</span>
          <Counter amount={1} />
        </div>
      </div>
    </section>
  );
};

export default Meal;
