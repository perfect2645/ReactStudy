import classes from "./Confirm.module.css";
import Backdrop from "../backdrop/Backdrop";

const Confirm = (props) => {
  return (
    <Backdrop className={classes.confirmBackdrop} onClick={props.onCancel}>
      <div className={classes.confirmContainer}>
        <p className={classes.confirmMsg}>{props.confirmMsg}</p>
        <div>
          <button
            className={classes.cancelBtn}
            onClick={(e) => props.onCancel(e)}
          >
            取消
          </button>
          <button className={classes.okBtn} onClick={(e) => props.onOk(e)}>
            确认
          </button>
        </div>
      </div>
    </Backdrop>
  );
};

export default Confirm;
