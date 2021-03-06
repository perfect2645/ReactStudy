import React from "react";
import "./LogItem.css";
import MyDate from "./MyDate";

const LogItem = (props) => {
  return (
    <div className="item">
      <MyDate date={props.date} />
      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}</div>
      </div>
    </div>
  );
};

export default LogItem;
