import React, { useState } from "react";
import Logs from "./logs/Logs";
import "./App.css";
import LogsForm from "./logsForm/LogsForm";

const App = () => {
  const dayStamp = 24 * 60 * 60 * 1000;

  const defaultlogsData = [
    {
      id: "001",
      date: new Date(),
      content: {
        desc: "学习React",
        duration: "30分钟",
      },
    },
    {
      id: "002",
      date: new Date(Date.now() + dayStamp),
      content: {
        desc: "学习Angular",
        duration: "50分钟",
      },
    },
  ];

  const [logsData, setLosData] = useState(defaultlogsData);

  const addLogHandler = (newLog) => {
    newLog.id = Date.now() + "";
    setLosData([newLog, ...logsData]);
  };

  const onDeleteLog = (index) => {
    setLosData((currentLogs) => {
      const newLogs = [...currentLogs];
      newLogs.splice(index, 1);

      return newLogs;
    });
  };

  return (
    <div className="app">
      <LogsForm onAddLog={addLogHandler} />
      <Logs logsData={logsData} onDeleteLog={onDeleteLog}></Logs>
    </div>
  );
};

export default App;
