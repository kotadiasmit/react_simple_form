import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

const userDetailsArray = [
  {
    userId: 1,
    name: "Smit Kotadia",
    location: "Sola Road, Ahmedabad, Gujarat, India",
  },
  { userId: 2, name: "Smit", location: "Sola Road, Ahmedabad, Gujarat" },
  { userId: 3, name: "Kotadia", location: "Sola Road, Ahmedabad" },
  { userId: 4, name: "Raj", location: "Sola Road, India" },
  { userId: 5, name: "rahul", location: "Ahmedabad, Gujarat, India" },
  { userId: 6, name: "RKP", location: "Sola, Ahmedabad, Gujarat, India" },
  { userId: 7, name: "Niks", location: "Sola, Ahmedabad, Gujarat" },
  { userId: 8, name: "SSK", location: "Sola Road, Ahmedabad" },
  { userId: 9, name: "Dhruv", location: "Sola, Ahmedabad, Gujarat, India" },
  { userId: 10, name: "Parth", location: "Ahmedabad, Gujarat, India" },
  { userId: 11, name: "aaa", location: "Gujarat, India" },
  { userId: 12, name: "bb cc dd", location: "Sola Road, Ahmedabad" },
  { userId: 13, name: "qq ww", location: "Sola Road, Ahmedabad, Gujarat" },
  { userId: 14, name: "ll dk", location: "Sola Road, Ahmedabad, India" },
  { userId: 15, name: "hh cc ee", location: "Sola Road, Gujarat, India" },
  { userId: 16, name: "Smit Shah", location: "Ahmedabad, Gujarat, India" },
];

function App() {
  const [userLocationArray, setUserLocationArray] = useState(userDetailsArray);

  const lastUserId = userLocationArray[userLocationArray.length - 1].userId;

  const addUserDetails = (userDetails) =>
    setUserLocationArray([...userLocationArray, userDetails]);

  return (
    <div className="user-location-container">
      <h1 className="mt-3">User Location Details</h1>

      <div className="search-and-add-location-container">
        <Form addUserDetails={addUserDetails} lastUserId={lastUserId} />
        <div className="search-input-container">
          <input
            type="search"
            className="search-bar"
            placeholder="Search by Name or Location"
            id="search-input"
            maxLength="35"
            autoFocus
          />
          <select
            className="search-select-container"
            id="search-select-container"
          >
            <option value="search_by_name">Search by Name</option>
            <option value="search_by_location">Search by Location</option>
          </select>
          <button type="button" className="search-btn" id="search-btn">
            Search
          </button>
        </div>
      </div>
      <Table userLocationArray={userLocationArray} />
    </div>
  );
}

export default App;
