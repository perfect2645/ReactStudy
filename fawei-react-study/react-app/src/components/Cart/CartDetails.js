import Backdrop from "../UI/backdrop/Backdrop";
import classes from "./CartDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartDetails = () => {
  return (
    <Backdrop>
      <div className={classes.CartDetails}>
        <header className={classes.header}>
          <h3 className={classes.title}>餐品详情</h3>
          <div className={classes.clear}>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            <span>清空购物车</span>
          </div>
        </header>
      </div>
    </Backdrop>
  );
};

export default CartDetails;
