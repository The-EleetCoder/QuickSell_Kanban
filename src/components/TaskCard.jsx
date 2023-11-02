import React from "react";
import "./TaskCard.css";

const TaskCard = ({ id, title, tag, availability, priority }) => {
  const priorityArray = ["No priority", "Low", "Medium", "High", "Urgent"];
  return (
    <div className="card">
      <div className="id">{id}</div>
      <div className="icon-title">
      {(availability != null) && (availability? <img src="assets/check.svg" className="icon-check"/> : <img src="assets/circle.png" className="no-check"/>)
        
       }
        <div className="title">{title}</div>
      </div>
      <div className="tag-div">
        <div className="priority-icon"><img src={`assets/${priorityArray[priority]}.png`} className="priority-icon"/></div>
        <div className="tag">
          <div className="circle"></div>
          {tag}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
