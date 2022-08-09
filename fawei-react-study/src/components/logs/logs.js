import "./Logs.css";
import Card from "../../UI/Card";
import LogItem from "./LogItem";

const Logs = (props) => {
  let logItems = props.logsData.map((data, index) => (
    <LogItem
      key={data.id}
      logsData={data}
      onDeleteLog={() => {
        props.onDeleteLog(index);
      }}
    ></LogItem>
  ));

  if (logItems.length === 0) {
    logItems = <p className="no-logs">没有找到日志！</p>;
  }

  return <Card className="logs">{logItems}</Card>;
};

export default Logs;
