import ReactDOM from "react";
import classes from "./Backdrop.module.css";

const backdropRoot = document.getElementById("backdrop-root");

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className={`${classes.Backdrop} ${props.classes}`}>
      {props.children}
    </div>,
    backdropRoot
  );
};

export default Backdrop;
