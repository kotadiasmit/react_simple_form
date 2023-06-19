import { createContext } from "react";

export const MyContext = createContext({
  userLocationArray: [],
  currentPageNo: 0,
  updateUserLocationArray: () => {},
  deleteUserLocation: () => {},
  changeCurrentPage: () => {},
});
