import "./App.css";
import { useState } from "react";

function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [value, setValue] = useState("status");
  const toggleDialog = () => {
    setDialogOpen(!isDialogOpen);
  };
  const valueHandler = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };
  return (
    <>
      <div className="navbar">
        <div className="display-button">
          <img src="assets/filter.png" id="filter-icon" />
          <div>Display</div>
          <img
            src="assets/arrow-down.png"
            id="down-icon"
            onClick={toggleDialog}
          />
        </div>
        {isDialogOpen && (
          <div className="dialog">
            <div className="dialog-content">
              <label htmlFor="grouping" className="label-text">
                Grouping
              </label>
              <select
                name="grouping"
                id="grouping"
                value={value}
                onChange={valueHandler}
                className="dropdown-select"
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="dialog-content">
              <label htmlFor="ordering" className="label-text">
                Ordering
              </label>
              <select
                name="ordering"
                id="ordering"
                className="dropdown-select"
                value={value}
                onChange={valueHandler}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
