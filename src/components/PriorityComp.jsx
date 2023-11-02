import React from "react";
import TaskCard from "./TaskCard";
import "./PriorityComp.css";

const PriorityComp = ({ data }) => {
  const priorityArray = ["No priority", "Low", "Medium", "High", "Urgent"];
  return (
    <div className="container">
      {priorityArray.map((value, index) => {
        const matchingTickets = data.tickets?.filter(ticket => ticket.priority === index) || [];
        const taskCardCount = matchingTickets.length;
        return (
          <div className="main-card">
            <div className="main-card-header">
              <div className="header-left">
                <img src="assets/signal-solid.svg" className="icon" />
                <div>{value}</div>
                <div>{taskCardCount}</div>
              </div>
              <div className="header-right">
                <div>+</div>
                <div className="three-dots">...</div>
              </div>
            </div>
            {data.tickets?.map((ticket) => {
              if (ticket?.priority == index) {
                return (
                  <div className="main-card-body">
                    {console.log({ ticket })}
                    <TaskCard
                      id={ticket.id}
                      title={ticket.title}
                      tag={ticket.tag[0]}
                    />
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default PriorityComp;
