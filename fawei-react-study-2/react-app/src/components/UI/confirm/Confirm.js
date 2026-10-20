import classes from "./Confirm.module.css";
import Backdrop from "../backdrop/Backdrop";

const Confirm = (props) => {
  return (
    <Backdrop className={classes.confirmBackdrop} stopPropagation={true}>
      <div
        className={classes.confirmWindow}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={classes.title}>{props.confirmation}</h2>
        <div className={classes.buttons}>
          <button className={`${classes.button}`} onClick={props.OnCancel}>
            No
          </button>
          <button
            className={`${classes.button} ${classes.ok}`}
            onClick={props.OnOk}
          >
            Yes
          </button>
        </div>
      </div>
    </Backdrop>
  );
};

export default Confirm;
