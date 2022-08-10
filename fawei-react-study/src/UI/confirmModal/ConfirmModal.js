import React from "react";
import Card from "../Card/Card";
import "./ConfirmModal.css";

const ConfirmModal = (props) => {
  return (
    <Card className="ConfirmModal">
      <article>
        <p>{props.message}</p>
      </article>
      <div className="confirmBtnArea">
        <button className="okButton" onClick={props.onConfirmOk}>
          确认
        </button>
        <button onClick={props.onConfirmCancel}>取消</button>
      </div>
    </Card>
  );
};

export default ConfirmModal;
