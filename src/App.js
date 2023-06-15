import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import { MyContext } from "./context/myContext";

const userDetailsArray = [
  {
    userId: 1,
    name: "Smit Kotadia",
    location: "Sola Road, Ahmedabad, Gujarat, India",
  },
  { userId: 2, name: "Smit", location: "Ahmedabad, Gujarat" },
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

const App = () => {
  const [userLocationArray, setUserLocationArray] = useState(userDetailsArray);
  const [searchValue, setSearchValue] = useState("");
  const [searchedLocationArray, setSearchedLocationArray] =
    useState(userLocationArray);
  const lengthOfUserLocationArray = userLocationArray.length;
  const lastUserId = lengthOfUserLocationArray
    ? userLocationArray[lengthOfUserLocationArray - 1].userId
    : 0;

  const addUserDetails = (userDetails) =>
    setUserLocationArray([...userLocationArray, userDetails]);

  const findUerIndex = (userDetails) =>
    userLocationArray.findIndex((user) => user.userId === userDetails.userId);
  const updateUserLocationArray = (userDetails) => {
    userLocationArray[findUerIndex(userDetails)] = userDetails;
    setUserLocationArray([...userLocationArray]);
  };

  const deleteUserLocation = (userDetails) => {
    userLocationArray.splice(findUerIndex(userDetails), 1);
    const updatedNewArray = userLocationArray.map((user, index) => ({
      userId: index + 1,
      name: user.name,
      location: user.location,
    }));
    setUserLocationArray(updatedNewArray);
  };

  const searchBySearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const searchedArray = userLocationArray.filter((user) =>
      user.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setSearchedLocationArray(searchedArray);
  }, [searchValue]);

  return (
    <MyContext.Provider
      value={{
        userLocationArray,
        updateUserLocationArray: updateUserLocationArray,
        deleteUserLocation: deleteUserLocation,
      }}
    >
      <div className="user-location-container">
        <h1 className="mt-3">User Location Details</h1>

        <div className="search-and-add-location-container">
          <Form onAddUserDetails={addUserDetails} lastUserId={lastUserId} />
          <div className="search-input-container">
            <input
              type="search"
              className="search-bar"
              placeholder="Search by Name or Location"
              maxLength="35"
              autoFocus
              value={searchValue}
              onChange={searchBySearchInput}
            />
            <select className="search-select-container">
              <option value="searchByName">Search by Name</option>
              <option value="searchByLocation">Search by Location</option>
            </select>
            <button type="button" className="search-btn">
              Search
            </button>
          </div>
        </div>
        <Table
          userLocationArray={
            searchValue ? searchedLocationArray : userLocationArray
          }
        />
      </div>
    </MyContext.Provider>
  );
};

export default App;
