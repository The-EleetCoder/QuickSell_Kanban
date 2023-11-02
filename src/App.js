import "./App.css";
import { useState, useEffect } from "react";
import StatusComp from "./components/StatusComp";
import axios from "axios";
import UserComp from "./components/UserComp";

function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [groupingValue, setGroupingValue] = useState("user");
  const [orderingValue, setOrderingValue] = useState("priority");
  const [apiData, setApiData] = useState("");
  const toggleDialog = () => {
    setDialogOpen(!isDialogOpen);
  };
  const groupingValueHandler = (event) => {
    setGroupingValue(event.target.value);
  };
  const orderingValueHandler = (event) => {
    setOrderingValue(event.target.value);
  };
  const url = "https://api.quicksell.co/v1/internal/frontend-assignment";
  async function fetchData() {
    // setLoading(true);
    const { data } = await axios.get(url);
    setApiData(data);
    // setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

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
                value={groupingValue}
                onChange={groupingValueHandler}
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
                value={orderingValue}
                onChange={orderingValueHandler}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>

      <div className="container">
        {groupingValue == "status" ? <StatusComp data={apiData} /> : groupingValue == "user" ? <UserComp data={apiData}/> : "nothing here"}
      </div>
    </>
  );
}

export default App;
