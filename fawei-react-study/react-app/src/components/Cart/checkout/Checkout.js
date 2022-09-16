import ReactDOM from "react-dom";
import classes from "./Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";

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
        <article className={classes.checkoutContent}>2</article>
        <footer className={classes.checkoutFooter}>
          <p className={classes.totalPrice}>{ctx.totalPrice}</p>
        </footer>
      </div>
    </div>,
    checkoutRoot
  );
};

export default Checkout;
