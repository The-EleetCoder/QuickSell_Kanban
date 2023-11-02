import React from "react";
import TaskCard from "./TaskCard";
import "./StatusComp.css";

const StatusComp = ({ data }) => {
  const statusArray = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];

  return (
    <div className="container">
      {statusArray.map((value) => (
        <div className="main-card">
          <div className="main-card-header">
            <div className="header-left">
              <img src="assets/signal-solid.svg" className="icon" />
              <div>{value}</div>
              <div>0</div>
            </div>
            <div className="header-right">
              <div>+</div>
              <div className="three-dots">...</div>
            </div>
          </div>
          {data.tickets?.map((ticket) => {
            if (ticket?.status == value) {
              return (
                <div className="main-card-body">
                {console.log({ticket})}
                  <TaskCard id={ticket.id} title={ticket.title} tag={ticket.tag[0]} />
                </div>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default StatusComp;
