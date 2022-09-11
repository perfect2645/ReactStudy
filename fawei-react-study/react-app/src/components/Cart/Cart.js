import React, { useContext } from "react";
import classes from "./Cart.module.css";
import bagIcon from "../../asset/bag.png";
import CartContext from "../../store/cart-context";
import CartDetails from "./CartDetails";

const Cart = () => {
  const ctx = useContext(CartContext);

  const hasSelection = ctx.totalAmount === 0;

  return (
    <div className={classes.cartContainer}>
      <CartDetails></CartDetails>

      <div className={classes.cartIcon}>
        <img src={bagIcon} alt="" className={classes.cartBox} />
        {hasSelection ? null : (
          <div className={classes.amount}>{ctx.totalAmount}</div>
        )}
      </div>
      {hasSelection ? (
        <h3 className={classes.noSelection}>未选购商品</h3>
      ) : (
        <h3 className={classes.price}>{ctx.totalPrice}</h3>
      )}

      <button
        className={`${classes.settleBtn} ${
          hasSelection ? classes.disabled : ""
        }`}
      >
        去结算
      </button>
    </div>
  );
};

export default Cart;
