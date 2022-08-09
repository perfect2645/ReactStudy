import "./LogItem.css";
import Card from "../../UI/Card";
import Calendar from "../calendar/Calendar";
import LogContent from "./LogContent";

const logItem = (props) => {
  return (
    <Card className="logItem">
      <Calendar calendar={props.logsData.date} />
      <LogContent content={props.logsData.content} />
    </Card>
  );
};

export default logItem;
