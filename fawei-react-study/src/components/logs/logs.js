import "./Logs.css";
import Card from "../../UI/Card";
import LogItem from "./LogItem";

const Logs = (props) => {
  const items = props.logsData.map((data, index) => (
    <LogItem
      key={data.id}
      logsData={data}
      onDeleteLog={() => {
        props.onDeleteLog(index);
      }}
    ></LogItem>
  ));

  return <Card className="logs">{items}</Card>;
};

export default Logs;
