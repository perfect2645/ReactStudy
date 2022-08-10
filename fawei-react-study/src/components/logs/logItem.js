import "./LogItem.css";
import Card from "../../UI/Card/Card";
import Calendar from "../calendar/Calendar";
import LogContent from "./LogContent";

const logItem = (props) => {
  const deleteLogHandler = (e) => {
    const delConfirm = window.confirm("确定删除？");
    if (delConfirm) {
      props.onDeleteLog();
    }
  };

  return (
    <Card className="logItem">
      <Calendar calendar={props.logsData.date} />
      <LogContent content={props.logsData.content} />
      <div>
        <div className="deleteDiv" onClick={deleteLogHandler}>
          x
        </div>
      </div>
    </Card>
  );
};

export default logItem;
