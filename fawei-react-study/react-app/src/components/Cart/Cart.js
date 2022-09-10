import React from "react";
import classes from "./Cart.module.css";
import bagIcon from "../../asset/bag.png";

const Cart = () => {
  return (
    <div className={classes.cartContainer}>
      <div className={classes.cartIcon}>
        <img src={bagIcon} alt="" className={classes.cartBox} />
        <div className={classes.amount}>2</div>
      </div>
      <h3 className={classes.price}>12</h3>
      <button className={classes.settleBtn}>去结算</button>
    </div>
  );
};

export default Cart;
