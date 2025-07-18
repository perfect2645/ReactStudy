import calsses from "./Cart.module.css";
import bagIcon from "../../assets/bag.png";
import CartContext from "../../store/CartContext";
import { useContext } from "react";

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

  return (
    <div className={calsses.cart}>
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
