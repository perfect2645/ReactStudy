import Backdrop from "../UI/backdrop/Backdrop";
import classes from "./CartDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../store/cart-context";
import { useContext, useState } from "react";
import Meal from "../meals/meal/Meal";
import Confirm from "../UI/confirm/Confirm";

const CartDetails = () => {
  const ctx = useContext(CartContext);

  const [showConfirm, setShowConfirm] = useState(false);

  const showConfirmHandler = () => {
    setShowConfirm(true);
  };

  const cancelHandler = (e) => {
    e.stopPropagation();

    setShowConfirm(false);
  };

  const okHandler = () => {};

  return (
    <Backdrop>
      {showConfirm && (
        <Confirm
          confirmMsg={"确认清空购物车吗"}
          onCancel={cancelHandler}
          onOk={okHandler}
        ></Confirm>
      )}

      <div className={classes.CartDetails} onClick={(e) => e.stopPropagation()}>
        <header className={classes.header}>
          <h3 className={classes.title}>餐品详情</h3>
          <div className={classes.clear} onClick={showConfirmHandler}>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            <span>清空购物车</span>
          </div>
        </header>

        <div className={classes.orderList}>
          {ctx.items.map((meal) => (
            <Meal key={meal.id} meal={meal}></Meal>
          ))}
        </div>
      </div>
    </Backdrop>
  );
};

export default CartDetails;
