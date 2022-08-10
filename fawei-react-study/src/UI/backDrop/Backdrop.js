import "./Backdrop.css";

const Backdrop = (props) => {
  return <div className="mask">{props.children}</div>;
};

export default Backdrop;
