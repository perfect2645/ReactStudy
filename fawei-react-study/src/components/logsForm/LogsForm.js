import React, { useState } from "react";
import "./LogsForm.css";
import Card from "../../UI/Card";

const LogsForm = (props) => {
  const today = () => {
    const time = new Date();
    const date = ("0" + time.getDate()).slice(-2); //slice(-2)从后往前取
    const month = ("0" + (time.getMonth() + 1)).slice(-2);
    const today = time.getFullYear() + "-" + month + "-" + date;

    return today;
  };

  const [dateValue, setCalendar] = useState(today());
  const [descValue, setDesc] = useState("");
  const [durationValue, setDuration] = useState("");

  const dateChangedHandler = (event) => {
    setCalendar(event.target.value);
  };

  const descChangedHandler = (event) => {
    setDesc(event.target.value);
  };

  const durationChangedHandler = (event) => {
    setDuration(event.target.value);
  };

  const onLogAddSubmit = (e) => {
    e.preventDefault();
    const newLog = {
      date: new Date(dateValue),
      content: {
        desc: descValue,
        duration: +durationValue,
      },
    };

    props.onAddLog(newLog);

    setCalendar(today());
    setDesc("");
    setDuration("");
  };

  return (
    <Card className="logs-form">
      <form onSubmit={onLogAddSubmit}>
        <article>
          <label htmlFor="date">日期</label>
          <input
            type="date"
            id="date"
            value={dateValue}
            onChange={dateChangedHandler}
          />
        </article>
        <article>
          <label htmlFor="desc">内容</label>
          <input
            type="text"
            id="desc"
            value={descValue}
            onChange={descChangedHandler}
          />
        </article>
        <article>
          <label htmlFor="duration">时长</label>
          <input
            type="text"
            id="duration"
            value={durationValue}
            onChange={durationChangedHandler}
          />
        </article>
        <article>
          <button className="logFormBtn">添加</button>
        </article>
      </form>
    </Card>
  );
};

export default LogsForm;
