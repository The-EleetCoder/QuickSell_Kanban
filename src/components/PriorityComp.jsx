import React from "react";
import TaskCard from "./TaskCard";
import "./PriorityComp.css";

const PriorityComp = ({ data, filterValue}) => {
  const priorityArray = ["No priority", "Low", "Medium", "High", "Urgent"];
  const availabilityObj = data?.users?.reduce((acc, user) => {
    acc[user.id] = user.available;
    return acc;
  }, {});
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
      {priorityArray.map((value, index) => {
        let arr = [];
        const matchingTickets =
          data.tickets?.filter((ticket) => ticket.priority === index) || [];
        const taskCardCount = matchingTickets.length;
        return (
          <div className="main-card">
            <div className="main-card-header">
              <div className="header-left">
                <img src={`assets/${value}.png`} className="icon" />
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
                arr.push(ticket);
              }
            })}
            {sortData(arr).map((ticket) => {
              return (
                <div className="main-card-body">
                  <TaskCard
                    id={ticket.id}
                    title={ticket.title}
                    tag={ticket.tag[0]}
                    availability={availabilityObj[ticket.userId]}
                    userId={ticket.userId}
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

export default PriorityComp;
