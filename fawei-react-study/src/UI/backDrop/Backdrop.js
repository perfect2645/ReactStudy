import "./Backdrop.css";
import ReactDOM from "react-dom";

//获取backdrop-root
const backdropRoot = document.querySelector("#backdrop-root");

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className="mask">{props.children}</div>,
    backdropRoot
  );
};

export default Backdrop;
