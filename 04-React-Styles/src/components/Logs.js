import React from "react";
import LogItem from "./LogItem";

const Logs = () => {
  return (
    <div className="logs">
      <LogItem desc="学习React" time="40分钟"></LogItem>
      <LogItem desc="学习C#" time="42分钟"></LogItem>
    </div>
  );
};

export default Logs;
