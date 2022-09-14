import classes from "./Backdrop.module.css";
import ReactDOM from "react-dom";

const backdropRoot = document.querySelector("#backdrop-root");

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div {...props} className={`${classes.Backdrop} ${props.className}`}>
      {props.children}
    </div>,
    backdropRoot
  );
};

export default Backdrop;
