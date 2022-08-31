import React from "react";
import ReactDOM from "react-dom/client";
import Meals from "./components/meals/Meals";
import "./index.css";

//设置移动端的适配
document.documentElement.style.fontSize = 100 / 750 + "vw";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Meals></Meals>
  </React.StrictMode>
);
