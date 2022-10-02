import React, { useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import bagIcon from "../../asset/bag.png";
import CartContext from "../../store/cart-context";
import CartDetails from "./CartDetails";
import Checkout from "./checkout/Checkout";

const Cart = () => {
  const ctx = useContext(CartContext);

  const [showDetails, setShowDetails] = useState(false);

  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      setShowCheckout(false);
    }
  }, [ctx, setShowDetails, setShowCheckout]);

  const toggleDetailsHandler = () => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      return;
    }
    setShowDetails((currentShowDetails) => {
      return !currentShowDetails;
    });
  };

  const showCheckoutHandler = () => {
    if (ctx.totalAmount === 0) {
      return;
    }
    setShowCheckout(true);
  };

  const closeCheckoutHandler = () => {
    setShowCheckout(false);
  };

  return (
    <div className={classes.cartContainer} onClick={toggleDetailsHandler}>
      {showCheckout && <Checkout onClose={closeCheckoutHandler}></Checkout>}
      {showDetails && <CartDetails></CartDetails>}

      <div className={classes.cartIcon}>
        <img src={bagIcon} alt="" className={classes.cartBox} />
        {ctx.totalAmount === 0 ? null : (
          <div className={classes.amount}>{ctx.totalAmount}</div>
        )}
      </div>
      {ctx.totalAmount === 0 ? (
        <h3 className={classes.noSelection}>未选购商品</h3>
      ) : (
        <h3 className={classes.price}>{ctx.totalPrice}</h3>
      )}

      <button
        className={`${classes.settleBtn} ${
          ctx.totalAmount === 0 ? classes.disabled : ""
        }`}
        onClick={showCheckoutHandler}
      >
        去结算
      </button>
    </div>
  );
};

export default Cart;
