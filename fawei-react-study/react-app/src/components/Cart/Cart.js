import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import bagIcon from "../../asset/bag.png";
import CartContext from "../../store/cart-context";
import CartDetails from "./CartDetails";

const Cart = () => {
  const ctx = useContext(CartContext);

  const [showDetails, setShowDetails] = useState(false);

  const noSelection = ctx.totalAmount === 0;

  const toggleDetailsHandler = () => {
    if (noSelection) {
      setShowDetails(false);
      return;
    }
    setShowDetails((currentShowDetails) => {
      return !currentShowDetails;
    });
  };

  return (
    <div className={classes.cartContainer} onClick={toggleDetailsHandler}>
      {showDetails && <CartDetails></CartDetails>}

      <div className={classes.cartIcon}>
        <img src={bagIcon} alt="" className={classes.cartBox} />
        {noSelection ? null : (
          <div className={classes.amount}>{ctx.totalAmount}</div>
        )}
      </div>
      {noSelection ? (
        <h3 className={classes.noSelection}>未选购商品</h3>
      ) : (
        <h3 className={classes.price}>{ctx.totalPrice}</h3>
      )}

      <button
        className={`${classes.settleBtn} ${
          noSelection ? classes.disabled : ""
        }`}
      >
        去结算
      </button>
    </div>
  );
};

export default Cart;
