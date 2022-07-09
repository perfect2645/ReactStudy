import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(2);

  const addHandler = (event) => {
    setCounter(counter + 1);
  };

  const minusHandler = (event) => {
    setCounter(counter - 1);
  };

  return (
    <div className="container">
      <h1>{counter}</h1>
      <button className="btn" onClick={minusHandler}>
        -
      </button>
      <button className="btn addBtn" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default App;
