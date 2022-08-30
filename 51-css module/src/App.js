import { useState } from "react";
import classes from "./App.module.css";

const App = () => {
  const [showBorder, setShowBorder] = useState(false);

  const btnClickHandler = () => {
    setShowBorder((currentShowBorder) => {
      return !currentShowBorder;
    });
  };

  return (
    <div>
      <p>我是一个段落</p>
      <button
        className={showBorder ? classes.border : classes.btn}
        onClick={btnClickHandler}
      >
        我是按钮
      </button>
    </div>
  );
};

export default App;
