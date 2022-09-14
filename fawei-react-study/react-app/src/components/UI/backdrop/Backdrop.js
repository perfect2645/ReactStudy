import classes from "./Backdrop.module.css";
import ReactDOM from "react-dom";

const backdropRoot = document.querySelector("#backdrop-root");

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className={`${classes.Backdrop} ${props.className}`} {...props}>
      {props.children}
    </div>,
    backdropRoot
  );
};

export default Backdrop;
