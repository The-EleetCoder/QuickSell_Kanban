import React from "react";
import "./TaskCard.css";

const TaskCard = ({ id, title, tag, availability, priority, userId }) => {
  const priorityArray = ["No priority", "Low", "Medium", "High", "Urgent"];
  return (
    <div className="card">
      <div className="id-div">
        <div className="id">{id}</div>
        {userId && <img src={`assets/${userId}.png`} className="profile-icon"/>}
      </div>
      <div className="icon-title">
        {availability != null &&
          (availability ? (
            <img src="assets/check.svg" className="icon-check" />
          ) : (
            <img src="assets/circle.png" className="no-check" />
          ))}
        <div className="title">{title}</div>
      </div>
      <div className="tag-div">
      {priority && <img
            src={`assets/${priorityArray[priority].toLowerCase()}.png`}
            className="priority-icon"
          />}
        <div className="tag">
          <div className="circle"></div>
          {tag}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
