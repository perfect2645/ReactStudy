import ReactDOM from "react-dom";
import classes from "./Backdrop.module.css";

const backdropRoot = document.getElementById("backdrop-root");

const Backdrop = (props) => {
  const backdropClickHandler = (e) => {
    if (props.stopPropagation) {
      e.stopPropagation();
    }
  };

  return ReactDOM.createPortal(
    <div
      className={`${classes.backdrop} ${props.className}`}
      onClick={backdropClickHandler}
    >
      {props.children}
    </div>,
    backdropRoot
  );
};

export default Backdrop;
