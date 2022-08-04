import React from "react";
import "./LogsForm.css";
import Card from "../../UI/Card";

const LogsForm = () => {
  const dateChangedHandler = (event) => {
    console.log(event.target);
  };

  const descChangedHandler = (event) => {
    console.log(event.target);
  };

  const durationChangedHandler = (event) => {
    console.log(event.target);
  };

  const addBtnClickHandler = () => {};

  return (
    <Card className="logs-form">
      <form>
        <article>
          <label htmlFor="date">日期</label>
          <input type="date" id="date" onChange={dateChangedHandler} />
        </article>
        <article>
          <label htmlFor="desc">内容</label>
          <input type="text" id="desc" onChange={descChangedHandler} />
        </article>
        <article>
          <label htmlFor="duration">时长</label>
          <input type="text" id="duration" onChange={durationChangedHandler} />
        </article>
        <article>
          <button onCkick={addBtnClickHandler}>添加</button>
        </article>
      </form>
    </Card>
  );
};

export default LogsForm;
