import React, { useContext } from "react";
import classes from "./Cart.module.css";
import bagIcon from "../../asset/bag.png";
import CartContext from "../../store/cart-context";

const Cart = () => {
  const ctx = useContext(CartContext);

  return (
    <div className={classes.cartContainer}>
      <div className={classes.cartIcon}>
        <img src={bagIcon} alt="" className={classes.cartBox} />
        <div className={classes.amount}>{ctx.totalAmount}</div>
      </div>
      <h3 className={classes.price}>{ctx.totalPrice}</h3>
      <button className={classes.settleBtn}>去结算</button>
    </div>
  );
};

export default Cart;
