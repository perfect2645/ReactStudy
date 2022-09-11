import Backdrop from "../UI/backdrop/Backdrop";
import classes from "./Cart.module.css";

const CartDetails = () => {
  return (
    <Backdrop>
      <div className={classes.CartDetails}>
        <header>
          <h3 className={classes.title}>餐品详情</h3>
        </header>
      </div>
    </Backdrop>
  );
};

export default CartDetails;
