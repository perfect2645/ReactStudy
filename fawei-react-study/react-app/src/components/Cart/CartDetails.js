import Backdrop from "../UI/backdrop/Backdrop";
import classes from "./CartDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import Meal from "../meals/meal/Meal";

const CartDetails = () => {
  const ctx = useContext(CartContext);

  return (
    <Backdrop>
      <div className={classes.CartDetails} onClick={(e) => e.stopPropagation()}>
        <header className={classes.header}>
          <h3 className={classes.title}>餐品详情</h3>
          <div className={classes.clear}>
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
