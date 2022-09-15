import ReactDOM from "react-dom";
import classes from "./Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const checkoutRoot = document.querySelector("#checkout-root");

const Checkout = (props) => {
  return ReactDOM.createPortal(
    <div className={classes.checkout}>
      <div className={classes.close} onClick={() => props.onClose()}>
        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
      </div>
    </div>,
    checkoutRoot
  );
};

export default Checkout;
