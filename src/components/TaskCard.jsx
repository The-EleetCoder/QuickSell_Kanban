import React from "react";
import "./TaskCard.css";

const TaskCard = ({ id, title, tag }) => {
  return (
    <div className="card">
      <div className="id">{id}</div>
      <div className="title">{title}</div>
      <div className="tag-div">
      <div className="priority-icon">-</div>
      <div className="tag"><div className="circle"></div>{tag}</div>
      </div>
    </div>
  );
};

export default TaskCard;
