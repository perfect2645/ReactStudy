import React from "react";

const MyDate = (props) => {
  console.log(props.date);

  // const month = props.date.getMonth() + 1;
  const month = props.date.toLocaleString("zh-CN", { month: "long" });
  const mydate = props.date.getDate();
  return (
    <div className="date">
      <div className="month">{month}</div>
      <div className="day">{mydate}</div>
    </div>
  );
};

export default MyDate;
