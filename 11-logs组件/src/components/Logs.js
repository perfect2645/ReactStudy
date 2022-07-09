import React from "react";
import LogItem from "./LogItem";

const Logs = () => {
  return (
    <div className="logs">
      <LogItem
        date={new Date(2022, 6, 7)}
        desc={"学习React"}
        time={"40分钟"}
      ></LogItem>
      <LogItem
        date={new Date(2022, 6, 7)}
        desc={"学习React"}
        time={"40分钟"}
      ></LogItem>
    </div>
  );
};

export default Logs;
