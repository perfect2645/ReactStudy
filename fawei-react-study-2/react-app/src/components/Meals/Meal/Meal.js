import React from "react";
import classes from "./Meal.module.css";

const Meal = () => {
  return (
    <div className={classes.Meal}>
      <div className={classes.imgBox}>
        <img src="/img/meals/1.png" alt="" />
      </div>
      <div className={classes.content}>
        <h2 className={classes.title}>汉堡包</h2>
        <p className={classes.desc}>百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！</p>
        <div className={classes.priceBox}>
          <span className={classes.price}>12</span>
          <div>数量</div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
