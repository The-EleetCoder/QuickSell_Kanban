import React from "react";
import "./UserComp.css";
import TaskCard from "./TaskCard";

const UserComp = ({ data }) => {
  console.log({ data });
  return (
    <div className="container">
      {data.users?.map((user) => {
        return (
          <div className="main-card">
            <div className="main-card-header">
              <div className="header-left">
                <img src="assets/signal-solid.svg" className="icon" />
                <div>{user.name}</div>
                <div>0</div>
              </div>
              <div className="header-right">
                <div>+</div>
                <div className="three-dots">...</div>
              </div>
            </div>
            {data.tickets?.map((ticket) => {
            if (ticket?.userId == user.id) {
              return (
                <div className="main-card-body">
                {console.log({ticket})}
                  <TaskCard id={ticket.id} title={ticket.title} tag={ticket.tag[0]} />
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

export default UserComp;
