import React from "react";
import classes from "./Meal.module.css";

const Meal = () => {
  return (
    <div className={classes.Meal}>
      <div className={classes.imgBox}>
        <img src="/img/meals/1.png" alt="" />
      </div>
      <div>
        <h2>汉堡包</h2>
        <p>百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！</p>
        <div>
          <span>12</span>
          <div>数量</div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
