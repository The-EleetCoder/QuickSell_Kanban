import React from "react";
import "./UserComp.css";
import TaskCard from "./TaskCard";

const UserComp = ({ data, filterValue }) => {
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
      {data.users?.map((user) => {
        let arr = [];
        const matchingTickets =
          data.tickets?.filter((ticket) => ticket.userId === user.id) || [];
        const taskCardCount = matchingTickets.length;
        return (
          <div className="main-card">
            <div className="main-card-header">
              <div className="header-left">
                <img src={`assets/${user.id}.png`} className="icon"/>
                <div>{user.name}</div>
                <div>{taskCardCount}</div>
              </div>
              <div className="header-right">
                <div>+</div>
                <div className="three-dots">...</div>
              </div>
            </div>
            {data.tickets?.map((ticket) => {
              if (ticket?.userId == user.id) {
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
                    availability={user.available}  
                    priority={ticket.priority}
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

export default UserComp;
