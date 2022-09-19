import ReactDOM from "react-dom";
import classes from "./Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";
import CheckoutItem from "./CheckoutItem";
import Bar from "./bar/Bar";

const checkoutRoot = document.querySelector("#checkout-root");

const Checkout = (props) => {
  const ctx = useContext(CartContext);

  return ReactDOM.createPortal(
    <div className={classes.checkout}>
      <div className={classes.close} onClick={() => props.onClose()}>
        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
      </div>

      <div className={classes.checkoutContainer}>
        <header className={classes.checkoutHeader}>
          <h3 className={classes.title}>餐品详情</h3>
        </header>
        <article className={classes.checkoutContent}>
          {ctx.items.map((item) => (
            <CheckoutItem key={item.id} meal={item}></CheckoutItem>
          ))}
        </article>
        <footer className={classes.checkoutFooter}>
          <p className={classes.totalPrice}>{ctx.totalPrice}</p>
        </footer>
      </div>

      <Bar totalPrice={ctx.totalPrice}></Bar>
    </div>,
    checkoutRoot
  );
};

export default Checkout;
