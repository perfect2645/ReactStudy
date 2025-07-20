import Backdrop from "../UI/backdrop/Backdrop";
import classes from "./CartDetails.module.css";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import Meal from "../Meals/Meal/Meal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Confirm from "../UI/confirm/Confirm";
import { useState } from "react";

const CartDetails = () => {
  const cartContext = useContext(CartContext);

  const [showConfirm, setShowConfirm] = useState(false);

  const showConfirmHandler = () => {
    setShowConfirm(true);
  };

  const cancelHandler = () => {
    setShowConfirm(false);
  };

  const okHandler = () => {
    cartContext.clearCart();
    setShowConfirm(false);
  };

  return (
    <Backdrop>
      {showConfirm ? (
        <Confirm
          confirmation="确认清空购物车？"
          OnCancel={cancelHandler}
          OnOk={okHandler}
        ></Confirm>
      ) : null}
      <div className={classes.cartDetails} onClick={(e) => e.stopPropagation()}>
        <header className={classes.title}>
          <h3>购物车详情</h3>
          <section className={classes.clear} onClick={showConfirmHandler}>
            <FontAwesomeIcon
              icon={faTrash}
              className={classes.trashIcon}
            ></FontAwesomeIcon>
            <span>清空购物车</span>
          </section>
        </header>
        <article className={classes.orderList}>
          {cartContext.items.map((meal) => {
            return <Meal key={meal.id} meal={meal} hideDesc={true}></Meal>;
          })}
        </article>
      </div>
    </Backdrop>
  );
};

export default CartDetails;
