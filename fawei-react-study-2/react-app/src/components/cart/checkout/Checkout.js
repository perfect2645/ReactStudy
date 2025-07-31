import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Checkout.module.css";
import ReactDOM from "react-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartContext from "../../../store/CartContext";
import CheckoutItem from "./CheckoutItem";

const checkoutRoot = document.getElementById("checkout-root");

const Checkout = (props) => {
  const cartContext = useContext(CartContext);

  return ReactDOM.createPortal(
    <div className={classes.checkout}>
      <section className={classes.close}>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => props.onCloseCheckout()}
        ></FontAwesomeIcon>
      </section>
      <article className={classes.content}>
        <header>
          <h1>餐品详情</h1>
        </header>
        <div className={classes.meals}>
          {cartContext.items.map((item) => {
            return (
              <CheckoutItem
                key={item.id}
                meal={item}
                hideDesc={true}
              ></CheckoutItem>
            );
          })}
        </div>
        <footer className={classes.footer}>
          <span>{`${cartContext.totalPrice}`}</span>
        </footer>
      </article>
      <footer className={classes.pricing}>
        <p>{`${cartContext.totalPrice}`}</p>
        <button className={classes.btnPayment}>
          <span>去支付</span>
        </button>
      </footer>
    </div>,
    checkoutRoot
  );
};

export default Checkout;
