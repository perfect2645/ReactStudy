import calsses from "./Cart.module.css";
import bagIcon from "../../assets/bag.png";
import CartContext from "../../store/CartContext";
import { useContext } from "react";

const Cart = () => {
  const cartContext = useContext(CartContext);

  const isEmptyCart = cartContext.totalAmount === 0;

  return (
    <div className={calsses.cart}>
      <div className={calsses.imgBox}>
        <img src={bagIcon} alt="购物车" />

        <span className={calsses.totalAmount}>{cartContext.totalAmount}</span>
      </div>
      <div className={calsses.pricing}>{cartContext.totalPrice}</div>
      <button className={calsses.checkout}>去结算</button>
    </div>
  );
};

export default Cart;
