import Backdrop from "../UI/backdrop/Backdrop";
import classes from "./CartDetails.module.css";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import Meal from "../Meals/Meal/Meal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartDetails = () => {
  const cartContext = useContext(CartContext);

  return (
    <Backdrop>
      <div className={classes.cartDetails}>
        <header className={classes.title}>
          <h3>购物车详情</h3>
          <section className={classes.clear}>
            <FontAwesomeIcon
              icon={faTrash}
              className={classes.trashIcon}
            ></FontAwesomeIcon>
            <span>清空购物车</span>
          </section>
        </header>
        <article className={classes.orderList}>
          {cartContext.items.map((meal) => {
            return <Meal key={meal.id} meal={meal}></Meal>;
          })}
        </article>
      </div>
    </Backdrop>
  );
};

export default CartDetails;
