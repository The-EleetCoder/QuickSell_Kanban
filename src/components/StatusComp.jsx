import React from "react";
import TaskCard from "./TaskCard";
import "./StatusComp.css";

const StatusComp = ({ data, filterValue }) => {
  const statusArray = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];

  const sortData = (arr) => {
    arr.sort((a, b) => {
      if (filterValue == "priority") {
        return b.priority - a.priority;
      } else if (filterValue == "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
    return arr;
  };

  return (
    <div className="container">
      {statusArray.map((value) => {
        let arr = [];
        const matchingTickets =
          data.tickets?.filter((ticket) => ticket.status === value) || [];
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
              if (ticket?.status == value) {
                arr.push(ticket);
              }
            })}
            {sortData(arr).map((ticket) => {
              return (
                <div className="main-card-body" key={ticket.id}>
                  <TaskCard
                    id={ticket.id}
                    title={ticket.title}
                    tag={ticket.tag[0]}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default StatusComp;
