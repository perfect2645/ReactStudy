import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Checkout.module.css";
import ReactDOM from "react-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartContext from "../../../store/CartContext";
import Meal from "../../Meals/Meal/Meal";

const checkoutRoot = document.getElementById("checkout-root");

const Checkout = (props) => {
  const cartContext = useContext(CartContext);

  return ReactDOM.createPortal(
    <div className={classes.checkout}>
      <section className={classes.close}>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => props.closeCheckoutHandler()}
        ></FontAwesomeIcon>
      </section>
      <article className={classes.content}>
        <header>
          <h1>餐品详情</h1>
        </header>
        <div>
          {cartContext.items.map((item) => {
            return <Meal key={item.id} meal={item} hideDesc={true}></Meal>;
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
