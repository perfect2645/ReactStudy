import calsses from "./Cart.module.css";
import bagIcon from "../../assets/bag.png";
import CartContext from "../../store/CartContext";
import { useContext, useEffect } from "react";
import { useState } from "react";
import CartDetails from "./CartDetails";

const Cart = () => {
  const cartContext = useContext(CartContext);

  const isEmptyCart = cartContext.totalAmount === 0;
  const amountHtml = isEmptyCart ? null : (
    <span className={calsses.totalAmount}>{cartContext.totalAmount}</span>
  );

  const priceHtml = isEmptyCart ? (
    <p className={calsses.noSelection}>未选择商品</p>
  ) : (
    <div className={calsses.pricing}>{cartContext.totalPrice}</div>
  );

  const checkoutClass = isEmptyCart
    ? `${calsses.checkout} ${calsses.disabled}`
    : `${calsses.checkout}`;

  const [showCartDetails, setShowCartDetails] = useState(false);

  useEffect(() => {
    if (cartContext.totalAmount === 0) {
      setShowCartDetails(false);
    }
  }, [cartContext.totalAmount]);

  const cartBodyClickHandler = (e) => {
    if (cartContext.totalAmount === 0) {
      return;
    }

    setShowCartDetails((prevState) => {
      return !prevState;
    });
  };

  return (
    <div
      className={calsses.cart}
      onClick={(e) => {
        cartBodyClickHandler(e);
      }}
    >
      {showCartDetails ? <CartDetails></CartDetails> : null}
      <div className={calsses.imgBox}>
        <img src={bagIcon} alt="购物车" />
        {amountHtml}
      </div>
      {priceHtml}
      <button className={checkoutClass}>去结算</button>
    </div>
  );
};

export default Cart;
