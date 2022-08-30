import "./LogItem.css";
import Card from "../../UI/Card/Card";
import Calendar from "../calendar/Calendar";
import LogContent from "./LogContent";
import ConfirmModal from "../../UI/confirmModal/ConfirmModal";
import { useState } from "react";

const LogItem = (props) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");

  const deleteLogHandler = (e) => {
    setShowConfirm(true);
    setConfirmMessage("确认删除吗？");
  };

  const confirmCancel = () => {
    setShowConfirm(false);
  };

  const confirmOk = () => {
    props.onDeleteLog();
    setShowConfirm(false);
  };

  return (
    <Card className="logItem">
      {showConfirm && (
        <ConfirmModal
          message={confirmMessage}
          onConfirmCancel={confirmCancel}
          onConfirmOk={confirmOk}
        />
      )}
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

export default LogItem;
